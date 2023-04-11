<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { initialize, onResize } from '$lib/initializeBackground';
	import Loading from '$lib/components/Loading.svelte';
	import { setCurrentPart } from '$lib/screenUnits';

	let container: HTMLDivElement;
	let isLoading = true;
	onMount(async () => {
		initialize(container);
		await new Promise((res) => setTimeout(res, 2000));
		isLoading = false;
	});

	let scroll: number = 0;
	let height: number = 0;
	$: setCurrentPart(scroll, height);
</script>

<svelte:head>
	<title>James's Portfolio</title>
</svelte:head>

<svelte:window on:resize={onResize} bind:scrollY={scroll} bind:innerHeight={height} />
<div class="fixed" bind:this={container} />

{#if isLoading}
	<Loading />
{:else}
	<div class="top-0 w-screen absolute z-10 font-mono">
		<slot />
	</div>
{/if}
