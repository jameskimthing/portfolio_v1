<script lang="ts">
	import { projects } from '$lib/carousel';
	import { showProject } from '$lib/projectPopup';
	import { fade, fly } from 'svelte/transition';
	import ContactSvg from './ContactSvg.svelte';
</script>

{#if $showProject !== ''}
	<!-- <div
		class="fixed left-0 right-0 top-0 bottom-0 backdrop-blur-sm z-50"
		on:pointerup={() => showProject.set('')}
		transition:fade
	/> -->
	<div
		class="fixed z-50 top-0 w-screen h-screen backdrop-blur-sm grid place-items-center"
		transition:fly={{ y: -100, duration: 500 }}
		on:pointerup={() => showProject.set('')}
	>
		<!-- style="transform: translate(-50%,-50%);" -->
		<div class="rounded-xl shadow-2xl flex flex-col bg-black border-2 border-amber-100 p-4">
			<div class="text-5xl mb-5 text-center font-bold text-yellow">{$showProject}</div>
			<div class="relative">
				<a target="_blank" rel="noopener noreferrer" href={projects[$showProject]['link']}>
					<div class="border-2 border-transparent hover:border-yellow w-[700px]">
						<img src={`/projects/${$showProject}.png`} alt="" />
					</div>
				</a>
				<div class="absolute bottom-2 right-2 p-1 rounded bg-black">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={projects[$showProject]['github'] ??
							`https://jameskimthing.github.io/${$showProject}`}
					>
						<ContactSvg contact="github" />
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}
