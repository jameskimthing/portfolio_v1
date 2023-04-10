<script lang="ts">
	import InViewTransition from '$lib/components/InViewTransition.svelte';
	import { currentPart } from '$lib/screenUnits';
	import { fly } from 'svelte/transition';
</script>

{#if $currentPart === 'contact'}
	<div
		class="fixed top-32 left-48 rounded-2xl bg-black border-2 border-amber-100"
		transition:fly={{ x: -100, duration: 500 }}
	>
		<div class="p-8 text-white">
			<InViewTransition delay={100}>ABOUT 1</InViewTransition>
			<InViewTransition delay={200}>ABOUT 2</InViewTransition>
			<InViewTransition delay={300}>ABOUT 3</InViewTransition>
		</div>
	</div>
{/if}
