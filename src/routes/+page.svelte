<script lang="ts">
	import Contacts from '$lib/components/Contacts.svelte';
	import About from './About.svelte';
	import TopPart from './TopPart.svelte';
	import Projects from './Projects.svelte';
	import ProjectPopup from '$lib/components/ProjectPopup.svelte';
	import BottomPart from './BottomPart.svelte';

	let height: number = 0;
	let pageHeight: HTMLDivElement;
	$: if (pageHeight) pageHeight.style.height = height * 12 + 'px';
</script>

<svelte:window bind:innerHeight={height} />

<Contacts />
<TopPart />

<About />
<Projects />

<ProjectPopup />

<div bind:this={pageHeight} class="h-[13000px]" />
<BottomPart />
