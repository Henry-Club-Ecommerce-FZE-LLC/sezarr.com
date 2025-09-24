import { g as createCollectionToGlobResultMap, h as createGetCollection } from './vendor-Dth9j5GM.js';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/editorial-team.md": () => import('./editorial-team-D5ixIs2Z.js'),"/src/content/authors/jane-doe.md": () => import('./jane-doe-98NjyFxy.js'),"/src/content/posts/auto-insurance-requirements-by-state-2025.md": () => import('./auto-insurance-requirements-by-state-2025-Duch3MHH.js'),"/src/content/posts/best-car-insurance-companies-2025.md": () => import('./best-car-insurance-companies-2025-tNmKfZcP.js'),"/src/content/posts/car-insurance-quotes-guide-2025.md": () => import('./car-insurance-quotes-guide-2025-Bktg-OrP.js'),"/src/content/posts/cheap-car-insurance-guide-2025.md": () => import('./cheap-car-insurance-guide-2025-CHzR43ac.js'),"/src/content/posts/factors-that-affect-car-insurance-rates-2025.md": () => import('./factors-that-affect-car-insurance-rates-2025-Bv1zx0bF.js')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"authors":{"type":"content","entries":{"editorial-team":"/src/content/authors/editorial-team.md","jane-doe":"/src/content/authors/jane-doe.md"}},"posts":{"type":"content","entries":{"auto-insurance-requirements-by-state-2025":"/src/content/posts/auto-insurance-requirements-by-state-2025.md","best-car-insurance-companies-2025":"/src/content/posts/best-car-insurance-companies-2025.md","cheap-car-insurance-guide-2025":"/src/content/posts/cheap-car-insurance-guide-2025.md","car-insurance-quotes-guide-2025":"/src/content/posts/car-insurance-quotes-guide-2025.md","factors-that-affect-car-insurance-rates-2025":"/src/content/posts/factors-that-affect-car-insurance-rates-2025.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/editorial-team.md": () => import('./editorial-team-DKRRBSsn.js'),"/src/content/authors/jane-doe.md": () => import('./jane-doe-uolNrkzl.js'),"/src/content/posts/auto-insurance-requirements-by-state-2025.md": () => import('./auto-insurance-requirements-by-state-2025-B-0HYpXP.js'),"/src/content/posts/best-car-insurance-companies-2025.md": () => import('./best-car-insurance-companies-2025-CQj6JKF9.js'),"/src/content/posts/car-insurance-quotes-guide-2025.md": () => import('./car-insurance-quotes-guide-2025-BUtzms9M.js'),"/src/content/posts/cheap-car-insurance-guide-2025.md": () => import('./cheap-car-insurance-guide-2025-CcRA-o7m.js'),"/src/content/posts/factors-that-affect-car-insurance-rates-2025.md": () => import('./factors-that-affect-car-insurance-rates-2025-DWzrO1ee.js')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
