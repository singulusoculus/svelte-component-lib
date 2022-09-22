<script>
	import Icon from '$lib/ui/Icon.svelte';

	export let navItems = [
		{
			icon: 'home',
			text: 'Home'
		},
		{
			icon: 'user',
			text: 'Account'
		},
		{
			icon: 'messages',
			text: 'Messages'
		},
		{
			icon: 'camera',
			text: 'Photos'
		},
		{
			icon: 'settings',
			text: 'Settings'
		}
	];

	export let position = 0;
</script>

<nav class="navbar-container">
	<ul class="list">
		<div style="--position: {position};" data-indicator class="indicator">
			<div class="corners" />
		</div>
		{#each navItems as navItem, i}
			<li>
				<a href="#test" class:active={i === position} on:click={() => (position = i)}>
					<div class="icon">
						<Icon name={navItem.icon} size={30} />
					</div>
					<div class="text">{navItem.text}</div>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
	}

	.navbar-container {
		--icon-size: 3rem;
		--indicator-spacing: calc(var(--icon-size) / 8);
		--border-radius: calc(var(--icon-size) / 4);
		--nav-item-padding: calc(var(--icon-size) / 2);
		--background-color: var(--back);
		--nav-background-color: var(--prime);

		background-color: var(--nav-background-color);
		border-radius: var(--border-radius);
		width: max-content;
		margin: 0 auto;
		margin-top: 10rem;
		padding: 0 calc(var(--nav-item-padding) * 1.5);
	}

	.list {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.list a {
		color: white;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--nav-item-padding);
	}

	.list .text {
		font-size: 0.8em;
		opacity: 0;
		pointer-events: none;
		transition: 250ms ease-in-out;
		position: absolute;
		bottom: calc(0.5 * var(--nav-item-padding));
		transform: translateY(50%);
	}

	.list .icon {
		position: relative;
		transition: 250ms ease-in-out;
	}

	// .list .icon svg {
	// 	fill: currentColor;
	// 	width: var(--icon-size);
	// 	height: var(--icon-size);
	// 	display: block;
	// }

	.list .active .text {
		pointer-events: all;
		opacity: 1;
		transform: translateY(0);
	}

	.list .active .icon {
		transform: translateY(calc(-50% - var(--nav-item-padding)));
		color: #333;
	}

	.list {
		position: relative;
	}

	.indicator {
		position: absolute;
		left: calc(var(--position) * (var(--icon-size) + var(--nav-item-padding) * 2));
		transition: 250ms ease-in-out;
	}

	.indicator::after,
	.indicator::before {
		content: '';
		position: absolute;
		border-radius: 100%;
	}

	.indicator::after {
		background-color: hsl(100, 100%, 50%);
		width: calc(var(--icon-size) * 2);
		height: calc(var(--icon-size) * 2);
		top: calc(-1 * var(--icon-size));
	}
	.indicator::before {
		background-color: var(--background-color);
		width: calc((var(--icon-size) + var(--indicator-spacing)) * 2);
		height: calc((var(--icon-size) + var(--indicator-spacing)) * 2);
		top: calc(-1 * var(--icon-size) - var(--indicator-spacing));
		left: calc(-1 * var(--indicator-spacing));
	}

	.corners::before {
		content: '';
		box-sizing: content-box;
		position: absolute;
		width: var(--border-radius);
		height: var(--border-radius);
		background-color: var(--nav-background-color);
		z-index: 1;
		top: calc(-1 * var(--indicator-spacing));
		left: calc(0.2 * var(--indicator-spacing));
		transform: translateX(-100%);
		border-top-right-radius: 100%;
		border-width: calc(var(--indicator-spacing));
		border-color: var(--background-color);
		border-style: solid;
		border-bottom: none;
		border-left: none;
	}

	.corners::after {
		content: '';
		box-sizing: content-box;
		position: absolute;
		width: var(--border-radius);
		height: var(--border-radius);
		background-color: var(--nav-background-color);
		z-index: 1;
		top: calc(-1 * var(--indicator-spacing));
		left: calc(var(--icon-size) * 2 + -0.2 * var(--indicator-spacing));
		border-top-left-radius: 100%;
		border-width: calc(var(--indicator-spacing));
		border-color: var(--background-color);
		border-style: solid;
		border-bottom: none;
		border-right: none;
	}
</style>
