<script>
	import Icon from '$lib/ui/Icon.svelte';
	import { slide } from 'svelte/transition';

	let darkMode = true;

	const toggleMode = () => {
		darkMode = !darkMode;
		document.body.classList.toggle('theme-dark');
	};
</script>

<div class="darkmode-icon">
	{#if darkMode}
		<div transition:slide|local>
			<Icon name="sun" on:clicked={toggleMode} size={28} />
		</div>
	{:else}
		<div transition:slide|local>
			<Icon name="moon" on:clicked={toggleMode} size={28} />
		</div>
	{/if}
</div>

<style>
	.darkmode-icon > :global(.icon):hover {
		color: var(--flash);
	}
</style>
