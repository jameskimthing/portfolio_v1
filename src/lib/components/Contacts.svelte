<script lang="ts">
	import ContactSvg from '$lib/components/ContactSvg.svelte';
	import InViewTransition from '$lib/components/InViewTransition.svelte';
	import Section from '$lib/components/Section.svelte';
	import { screenUnitsPerSection } from '$lib/screenUnits';

	let scroll: number = 0;

	let sections: HTMLDivElement;
	$: scroll >= 350
		? sections?.classList.add('translate-x-0', 'opacity-100')
		: sections?.classList.remove('translate-x-0', 'opacity-100');
</script>

<svelte:window bind:scrollY={scroll} />

<div class="fixed bottom-0 left-10 z-40 hidden md:block">
	<InViewTransition delay={1000}>
		<div class="flex flex-col text-bright-yellow items-center">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="mailto:jameskimjaewon.abc@gmail.com?subject=Contact&body=Hello%20there!"
			>
				<ContactSvg contact="email" />
			</a>
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/jameskimthing">
				<ContactSvg contact="github" />
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/in/james-kim-282750252/"
			>
				<ContactSvg contact="linkedin" />
			</a>
			<div class="w-0.5 h-80 mt-4 bg-amber-100" />
		</div>
	</InViewTransition>

	<div class="transition-all duration-500 opacity-0 -translate-x-full" bind:this={sections}>
		<div class="flex flex-col gap-5 fixed bottom-8 left-12">
			<Section name="about" />
			<Section name="projects" />
			<Section name="contact" />
		</div>
	</div>
</div>
