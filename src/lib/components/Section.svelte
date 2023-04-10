<script lang="ts">
	import { currentPart, moveToPart, type CurrentPart } from '$lib/screenUnits';

	export let name: CurrentPart;
	let num: string = name === 'about' ? '0. ' : name === 'projects' ? '1. ' : '2. ';

	let isCurrentPart: string;
	$: isCurrentPart = $currentPart === name ? 'text-yellow' : 'text-amber-100';
</script>

<div
	class={'cursor-pointer text-lg hover:text-bright-yellow hover:text-xl whitespace-nowrap w-fit transition-all ' +
		isCurrentPart}
	on:pointerup={() => moveToPart(name)}
>
	{num + name.charAt(0).toUpperCase() + name.slice(1)}
</div>
