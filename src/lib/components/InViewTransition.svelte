<script lang="ts">
	import { type Directions, observeObject } from '$lib/observer';
	import { onMount } from 'svelte';

	export let direction: Directions = 'horizontal';
	export let delay: number = 0;

	let element: HTMLDivElement;
	onMount(() => observeObject(element, direction, delay));
</script>

<div bind:this={element} class="transition-all duration-500 opacity-0">
	<slot />
</div>
