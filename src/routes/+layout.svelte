<script lang="ts">
	import '$lib/style.css';
	let { children } = $props();

	//import { browser } from '$app/environment';
	//if (browser) {
	//	for (let i = 0; i < 1_000; i++) {
	//		document.documentElement.classList.remove('dark')
	//		document.documentElement.classList.add('dark')
	//	}
	//}
</script>

{@render children()}
