<script lang="ts">
	import {
		carouselClick,
		carouselMouseLeave,
		carouselMouseMove,
		initializeCarousel,
		removeCarousel
	} from '$lib/carousel';
	import InViewTransition from '$lib/components/InViewTransition.svelte';
	import { currentPart } from '$lib/screenUnits';
	import { fly } from 'svelte/transition';

	let carousel: HTMLDivElement;
	$: $currentPart === 'projects' && carousel ? initializeCarousel(carousel) : removeCarousel();
</script>

{#if $currentPart === 'projects'}
	<div class="fixed inset-0 grid place-items-center" transition:fly={{ x: -100, duration: 500 }}>
		<div class="flex flex-col items-center">
			<div class="text-yellow font-bold text-5xl mb-4">My Past Projects</div>
			<InViewTransition>
				<div
					class="h-[700px] w-[1200px]"
					bind:this={carousel}
					on:mousemove={carouselMouseMove}
					on:mouseleave={carouselMouseLeave}
					on:pointerup={carouselClick}
				/>
			</InViewTransition>
		</div>
	</div>
{/if}
