<script>
	import SideNavRail from '$lib/ui/SideNavRail.svelte';
	import SideNav from '$lib/layout/SideNav.svelte';
	import DemoBox from '$lib/ui/DemoBox.svelte';
	import Header from '$lib/layout/Header.svelte';
	import Nav from '$lib/ui/Nav.svelte';
	import MagicIndicatorNav from '$lib/ui/MagicIndicatorNav.svelte';

	let navItems = [
		{
			name: 'Home',
			icon: '',
			href: '/'
		},
		{
			name: 'Demo',
			icon: '',
			href: '/'
		}
	];
</script>

<h2>Navigation</h2>

<DemoBox title="Magic Circle Navigation">
	<MagicIndicatorNav />
</DemoBox>

<DemoBox title="Header with Nav">
	<div class="demo-set-header">
		<Header disappearOnScroll={false}>
			<Nav hasMobileNav={true} {navItems} />
		</Header>
	</div>
</DemoBox>

<DemoBox title="Side Nav Rail with Drawer" height={40}>
	<SideNavRail />
</DemoBox>

<DemoBox title="Side Nav">
	<SideNav />
</DemoBox>

<style>
	.demo-set-header > :global(.header-wrapper) {
		position: absolute;
	}

	.demo-set-header > :global(.header-wrapper) > :global(header) {
		position: absolute;
	}
</style>
