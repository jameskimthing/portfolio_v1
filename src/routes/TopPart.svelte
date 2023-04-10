<script lang="ts">
	import InViewTransition from '$lib/components/InViewTransition.svelte';
</script>

<div class="bg-black w-screen h-screen pl-32 flex flex-col justify-center">
	<InViewTransition direction="vertical" delay={300}>
		<div class="text-white pb-3 text-3xl">Hello! I am</div>
	</InViewTransition>
	<InViewTransition direction="vertical" delay={400}>
		<div class="text-6xl md:text-9xl text-bright-yellow font-bold -ml-4">James Kim,</div>
	</InViewTransition>

	<InViewTransition direction="vertical" delay={500}>
		<div class="text-4xl md:text-7xl text-amber-100 font-bold w-fit">a software developer.</div>
	</InViewTransition>

	<InViewTransition direction="vertical" delay={600}>
		<div class="text-lg md:text-xl text-slate-600 mt-4 max-w-[800px]">
			I specialize in building web and mobile applications with Svelte and Flutter, alongside
			Tailwind CSS and Firebase to create dynamic and responsive applications.
		</div>
	</InViewTransition>
</div>
