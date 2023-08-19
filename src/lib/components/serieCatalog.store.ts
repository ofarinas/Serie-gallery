import { get, writable } from 'svelte/store';
import type { Serie } from './serie.model';
import { loadSerieCatalog } from '$lib/load/loadData.model';

const { subscribe, set, update } = writable<Serie[]>([]);
const loading = writable(false);
const error = writable(false);

export const serieCatalogStore = {
	subscribe,
	loading,
	error,
	set,
	update,
	fetch: async () => {
		loading.set(true);
		try {
			set(await loadSerieCatalog());
		} catch {
			error.set(true);
		} finally {
			loading.set(false);
		}
	},
	getSerie: (nameId?: string): Serie | undefined => {
		return get(serieCatalogStore).find((serie) => serie.id === nameId);
	}
};
