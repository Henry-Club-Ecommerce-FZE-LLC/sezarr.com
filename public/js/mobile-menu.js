// Mobile Menu Module
const MobileMenu = {
  elements: null,
  state: {
    isOpen: false,
    activeSubmenu: null
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
    const { menuButton, mobileMenu } = this.elements;
    
    // Use event delegation for menu interaction
    document.addEventListener('click', this.handleClick.bind(this));
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('resize', this.updatePosition.bind(this));
    
    // Initial setup
    this.updatePosition();
  },
  
  handleClick(event) {
    const { target } = event;
    const { menuButton, mobileMenu } = this.elements;
    
    // Handle menu button click
    if (menuButton.contains(target)) {
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
    
    // Handle menu links
    const menuLink = target.closest('#mobile-menu a:not([data-menu-trigger]):not([data-menu-back])');
    if (menuLink && this.state.isOpen) {
      requestAnimationFrame(() => this.toggleMenu());
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
    
    requestAnimationFrame(() => {
      if (this.state.isOpen) {
        mobileMenu.classList.remove('hidden');
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
        this.showMainMenu();
      } else {
        mobileMenu.classList.add('hidden');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
        this.hideAllSubmenus();
      }
    });
  },
  
  showMainMenu() {
    const { mainMenu } = this.elements;
    if (mainMenu) {
      requestAnimationFrame(() => {
        mainMenu.style.transform = 'translateX(0)';
      });
    }
    this.hideAllSubmenus();
  },
  
  hideAllSubmenus() {
    const { toolsSubmenu, insuranceSubmenu, blogSubmenu } = this.elements;
    const submenus = [toolsSubmenu, insuranceSubmenu, blogSubmenu];
    
    requestAnimationFrame(() => {
      submenus.forEach(submenu => {
        if (submenu) {
          submenu.style.transform = 'translateX(100%)';
        }
      });
      
      // Reset menu trigger icons
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
    
    requestAnimationFrame(() => {
      // Hide other submenus
      Object.values(submenuMap).forEach(sub => {
        if (sub && sub !== submenu) {
          sub.style.transform = 'translateX(100%)';
        }
      });
      
      // Show selected submenu
      submenu.style.transform = 'translateX(0)';
      
      // Update trigger icon
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
        requestAnimationFrame(() => {
          submenu.style.transform = 'translateX(100%)';
          
          // Reset trigger icon
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
    
    requestAnimationFrame(() => {
      const rect = mobileMenu.getBoundingClientRect();
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