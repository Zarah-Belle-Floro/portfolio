<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/Design';

	export function changeTheme() {
		// Changes the color theme of the whole website based on user preference

		if ($theme.curr) {
			document.body.classList.remove($theme.prev);
			document.body.classList.add($theme.curr);
		} 
        // else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// 	document.body.classList.remove('light');
		// 	document.body.classList.add('dark');
		// 	$theme.curr = 'dark';
		// } 
        // else {
		// 	document.body.classList.add('light');
		// 	$theme.curr = 'light';
		// }
	}

	onMount(() => {
        $theme.curr = 'dark';
	});
</script>

<slot />
