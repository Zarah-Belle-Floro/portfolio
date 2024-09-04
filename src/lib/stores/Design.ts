import { writable, type Writable } from 'svelte/store';

export const theme: Writable<{ curr: 'light' | 'dark' | ''; prev: 'light' | 'dark' | '' }> =
	writable({
		curr: '',
		prev: ''
	});
