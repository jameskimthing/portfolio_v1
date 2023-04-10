<script lang="ts">
	import { projects } from '$lib/carousel';
	import { showProject } from '$lib/projectPopup';
	import { fade, fly } from 'svelte/transition';
	import ContactSvg from './ContactSvg.svelte';
</script>

{#if $showProject !== ''}
	<div
		class="fixed z-50 top-0 w-screen h-screen backdrop-blur-sm grid place-items-center"
		transition:fly={{ y: -100, duration: 500 }}
		on:pointerup={() => showProject.set('')}
	>
		<!-- style="transform: translate(-50%,-50%);" -->
		<div
			class="rounded lg:rounded-xl shadow-2xl flex flex-col bg-black border-2 border-amber-100 p-4"
		>
			<div class="text-xl md:text-5xl mb-1 lg:mb-5 text-center font-bold text-yellow">
				{$showProject}
			</div>
			<div class="relative">
				<a target="_blank" rel="noopener noreferrer" href={projects[$showProject]['link']}>
					<div
						class="border-2 border-transparent hover:border-yellow w-72 md:w-80 lg:w-[500px] xl:w-[700px]"
					>
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
