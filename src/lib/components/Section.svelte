<script lang="ts">
	import { currentPart, moveToPart, type CurrentPart, scroll } from '$lib/screenUnits';

	export let name: CurrentPart;
	let num: string = name === 'about' ? '0. ' : name === 'projects' ? '1. ' : '2. ';
	let height: number = 0;

	let isCurrentPart: string;
	$: isCurrentPart = $currentPart === name ? 'text-yellow' : 'text-amber-100';
	if (name === 'contact') {
		scroll.subscribe((s) => {
			if (s >= height * 12.5) isCurrentPart = 'text-yellow';
			else isCurrentPart = 'text-amber-100';
		});
	}
</script>

<svelte:window bind:innerHeight={height} />

<div
	class={'cursor-pointer text-lg hover:text-bright-yellow hover:text-xl whitespace-nowrap w-fit transition-all ' +
		isCurrentPart}
	on:pointerup={() => moveToPart(name)}
>
	{num + name.charAt(0).toUpperCase() + name.slice(1)}
</div>
