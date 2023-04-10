<script lang="ts">
	import Contacts from '$lib/components/Contacts.svelte';
	import About from './About.svelte';
	import TopPart from './TopPart.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
	import ProjectPopup from '$lib/components/ProjectPopup.svelte';
</script>

<Contacts />
<TopPart />

<About />
<Projects />
<Contact />

<ProjectPopup />

<div class="h-[15000px]" />
