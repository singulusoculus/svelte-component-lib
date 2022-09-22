<script>
	import Card from '$lib/ui/Card.svelte';
	import VisiLoad from '$lib/ui/Visiload.svelte';
	import Icon from '$lib/ui/Icon.svelte';
</script>

<h2>Home</h2>
<p>
	PageContainer, Header, Content, and Footer components are found in the +layout.svelte file and
	will apply to each page route.
</p>
<p>
	This page layout is predicated on having the global.scss file defined and imported with certain
	variables. The sass npm package must be installed to use Bringing this file into your project and
	altering it should help you think through some common design elements up front.
</p>
<p>
	To get the theme-default and typo-default to load you must add these classes to the html element
	in app.html
</p>
<p>
	Icons come from svgs stored in the Icons.svelte file and can be applied with the Icon.svelte
	component
</p>

<style>
	h2 {
		margin: 2rem 0 1rem 0;
	}
</style>
