<script lang="ts">
	import InViewTransition from '$lib/components/InViewTransition.svelte';
	import { currentPart } from '$lib/screenUnits';
	import { initializeSphere, removeSphere, setMouseSphereLocation } from '$lib/tagSphere';
	import { fly } from 'svelte/transition';

	let sphere: HTMLDivElement;
	$: $currentPart === 'about' && sphere ? initializeSphere(sphere) : removeSphere();
</script>

{#if $currentPart === 'about'}
	<div
		class="fixed inset-0 grid place-items-center mx-24 text-white"
		transition:fly={{ x: -100, duration: 500 }}
	>
		<div class="flex flex-col border-2 bg-black border-slate-500 rounded-xl p-8 w-min">
			<InViewTransition delay={150}>
				<div class="text-3xl text-yellow font-bold text-center mb-3">My Skills</div>
				<div class="text-slate-300 text-center">
					I am a software developer who specializes in building web applications using SvelteKit,
					TypeScript, and Tailwind CSS. I also have experience using Flutter for mobile app
					development. I have experience with both Firebase and Supabase for building backends of
					web and mobile applications.
				</div>
			</InViewTransition>
			<InViewTransition delay={100}>
				<div
					bind:this={sphere}
					class="rounded w-[800px] h-[500px] mx-auto"
					on:mousemove={setMouseSphereLocation}
				/>
			</InViewTransition>
			<div />
		</div>
	</div>
{/if}
