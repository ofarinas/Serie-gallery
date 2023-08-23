import { describe, it, expect, vi } from 'vitest';
import { serieCatalogStore } from './serieCatalog.store';
import { get } from 'svelte/store';
import { loadSerieCatalog } from '$lib/load/loadData.model';

describe('fetch', () => {
	it('calls the fetch method ', async (done) => {
		vi.spyOn(global, 'fetch');
		await serieCatalogStore.fetch();
		expect(global.fetch).toHaveBeenCalled();
	});
	it('is not loading', async (done) => {
		await serieCatalogStore.fetch();
		expect(get(serieCatalogStore.loading)).toBe(false);
	});
});
