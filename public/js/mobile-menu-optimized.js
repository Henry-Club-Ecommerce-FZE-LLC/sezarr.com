// Mobile Menu Module
const MobileMenu = {
  elements: null,
  state: {
    isOpen: false,
    activeSubmenu: null,
    batchUpdates: new Set()
  },
  
  init() {
    this.elements = this.getElements();
    if (!this.validateElements()) return;
    
    this.bindEvents();
    this.updatePosition();
  },
  
  getElements() {
    return {
      menuButton: document.getElementById('mobile-menu-button'),
      mobileMenu: document.getElementById('mobile-menu'),
      openIcon: document.getElementById('mobile-menu-open'),
      closeIcon: document.getElementById('mobile-menu-close'),
      mainMenu: document.getElementById('main-menu'),
      toolsSubmenu: document.getElementById('tools-submenu'),
      insuranceSubmenu: document.getElementById('insurance-submenu'),
      blogSubmenu: document.getElementById('blog-submenu')
    };
  },
  
  validateElements() {
    const { menuButton, mobileMenu, openIcon, closeIcon, mainMenu } = this.elements;
    return menuButton && mobileMenu && openIcon && closeIcon && mainMenu;
  },
  
  bindEvents() {
    // Use passive listeners where possible
    document.addEventListener('click', this.handleClick.bind(this), { passive: false });
    document.addEventListener('keydown', this.handleKeyDown.bind(this), { passive: true });
    // Throttle resize events
    let resizeTimer;
    window.addEventListener('resize', () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.updatePosition(), 100);
    }, { passive: true });
  },
  
  applyBatchedUpdates() {
    if (this.state.batchUpdates.size === 0) return;
    
    requestAnimationFrame(() => {
      for (const update of this.state.batchUpdates) {
        update();
      }
      this.state.batchUpdates.clear();
    });
  },
  
  queueUpdate(update) {
    this.state.batchUpdates.add(update);
    if (this.state.batchUpdates.size === 1) {
      this.applyBatchedUpdates();
    }
  },
  
  handleClick(event) {
    const { target } = event;
    const { menuButton, mobileMenu } = this.elements;
    
    // Handle menu button click
    if (menuButton.contains(target)) {
      event.preventDefault();
      this.toggleMenu();
      return;
    }
    
    // Handle outside click
    if (this.state.isOpen && !mobileMenu.contains(target)) {
      this.toggleMenu();
      return;
    }
    
    // Handle submenu triggers
    const trigger = target.closest('[data-menu-trigger]');
    if (trigger) {
      event.preventDefault();
      const submenuType = trigger.getAttribute('data-menu-trigger');
      this.toggleSubmenu(submenuType);
      return;
    }
    
    // Handle back buttons
    const backButton = target.closest('[data-menu-back]');
    if (backButton) {
      event.preventDefault();
      this.hideSubmenu();
      return;
    }
    
    // Handle menu links with debounce
    const menuLink = target.closest('#mobile-menu a:not([data-menu-trigger]):not([data-menu-back])');
    if (menuLink && this.state.isOpen) {
      this.queueUpdate(() => this.toggleMenu());
    }
  },
  
  handleKeyDown(event) {
    if (event.key === 'Escape') {
      if (this.state.activeSubmenu) {
        this.hideSubmenu();
      } else if (this.state.isOpen) {
        this.toggleMenu();
      }
    }
  },
  
  toggleMenu() {
    const { mobileMenu, openIcon, closeIcon, menuButton } = this.elements;
    this.state.isOpen = !this.state.isOpen;
    
    this.queueUpdate(() => {
      const updates = [
        () => mobileMenu.classList.toggle('hidden', !this.state.isOpen),
        () => openIcon.classList.toggle('hidden', this.state.isOpen),
        () => closeIcon.classList.toggle('hidden', !this.state.isOpen),
        () => menuButton.setAttribute('aria-expanded', this.state.isOpen.toString())
      ];
      
      updates.forEach(update => update());
      
      if (this.state.isOpen) {
        this.showMainMenu();
      } else {
        this.hideAllSubmenus();
      }
    });
  },
  
  showMainMenu() {
    const { mainMenu } = this.elements;
    if (mainMenu) {
      this.queueUpdate(() => {
        mainMenu.style.transform = 'translateX(0)';
        this.hideAllSubmenus();
      });
    }
  },
  
  hideAllSubmenus() {
    const { toolsSubmenu, insuranceSubmenu, blogSubmenu } = this.elements;
    const submenus = [toolsSubmenu, insuranceSubmenu, blogSubmenu];
    
    this.queueUpdate(() => {
      submenus.forEach(submenu => {
        if (submenu) {
          submenu.style.transform = 'translateX(100%)';
        }
      });
      
      document.querySelectorAll('[data-menu-trigger]').forEach(trigger => {
        const icon = trigger.querySelector('svg');
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
        }
        trigger.setAttribute('aria-expanded', 'false');
      });
    });
    
    this.state.activeSubmenu = null;
  },
  
  toggleSubmenu(submenuType) {
    if (this.state.activeSubmenu === submenuType) {
      this.hideSubmenu();
    } else {
      this.showSubmenu(submenuType);
    }
  },
  
  showSubmenu(submenuType) {
    const { toolsSubmenu, insuranceSubmenu, blogSubmenu } = this.elements;
    const submenuMap = {
      'tools': toolsSubmenu,
      'insurance': insuranceSubmenu,
      'blog': blogSubmenu
    };
    
    const submenu = submenuMap[submenuType];
    if (!submenu) return;
    
    this.queueUpdate(() => {
      Object.values(submenuMap).forEach(sub => {
        if (sub && sub !== submenu) {
          sub.style.transform = 'translateX(100%)';
        }
      });
      
      submenu.style.transform = 'translateX(0)';
      
      const trigger = document.querySelector(`[data-menu-trigger="${submenuType}"]`);
      if (trigger) {
        const icon = trigger.querySelector('svg');
        if (icon) {
          icon.style.transform = 'rotate(90deg)';
        }
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
    
    this.state.activeSubmenu = submenuType;
  },
  
  hideSubmenu() {
    const { toolsSubmenu, insuranceSubmenu, blogSubmenu } = this.elements;
    const submenuMap = {
      'tools': toolsSubmenu,
      'insurance': insuranceSubmenu,
      'blog': blogSubmenu
    };
    
    if (this.state.activeSubmenu) {
      const submenu = submenuMap[this.state.activeSubmenu];
      if (submenu) {
        this.queueUpdate(() => {
          submenu.style.transform = 'translateX(100%)';
          
          const trigger = document.querySelector(`[data-menu-trigger="${this.state.activeSubmenu}"]`);
          if (trigger) {
            const icon = trigger.querySelector('svg');
            if (icon) {
              icon.style.transform = 'rotate(0deg)';
            }
            trigger.setAttribute('aria-expanded', 'false');
          }
        });
      }
      
      this.state.activeSubmenu = null;
    }
  },
  
  updatePosition() {
    const { mobileMenu, toolsSubmenu, insuranceSubmenu, blogSubmenu } = this.elements;
    if (!mobileMenu) return;
    
    this.queueUpdate(() => {
      [toolsSubmenu, insuranceSubmenu, blogSubmenu].forEach(submenu => {
        if (submenu) {
          submenu.style.top = '0';
          submenu.style.left = '0';
          submenu.style.right = '0';
          submenu.style.bottom = '0';
        }
      });
    });
  }
};

export default MobileMenu;