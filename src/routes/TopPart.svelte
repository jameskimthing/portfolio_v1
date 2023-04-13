<script lang="ts">
	import InViewTransition from '$lib/components/InViewTransition.svelte';
</script>

<div class="bg-black w-screen h-screen px-8 md:pl-32 flex flex-col justify-center">
	<InViewTransition direction="vertical" delay={300}>
		<div class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white md:pb-3">Hello! I am</div>
	</InViewTransition>
	<InViewTransition direction="vertical" delay={400}>
		<div
			class="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-bright-yellow font-bold md:-ml-4 whitespace-nowrap"
		>
			James Kim,
		</div>
	</InViewTransition>

	<InViewTransition direction="vertical" delay={500}>
		<div
			class="text-xl sm:text-4xl md:text-5xl lg:text-7xl text-amber-100 font-bold whitespace-nowrap"
		>
			a software developer.
		</div>
	</InViewTransition>

	<InViewTransition direction="vertical" delay={600}>
		<div class="text-lg md:text-xl text-slate-600 mt-4 max-w-[800px]">
			I specialize in building web and mobile applications with Svelte and Flutter, alongside
			Tailwind CSS and Firebase to create dynamic and responsive applications.
		</div>
	</InViewTransition>
</div>
