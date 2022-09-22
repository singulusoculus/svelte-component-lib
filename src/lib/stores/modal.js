import { writable } from 'svelte/store';

const modalStore = writable({
	show: false,
	options: {}
});

export const modal = {
	subscribe: modalStore.subscribe,
	show: (options) => {
		modalStore.set({ show: true, options });
	},
	hide: () => {
		modalStore.set({ show: false, options: {} });
	}
};
