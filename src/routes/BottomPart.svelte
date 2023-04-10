<script lang="ts">
	import InViewTransition from '$lib/components/InViewTransition.svelte';
	import * as emailjs from '@emailjs/browser';

	let name = '';
	let email = '';
	let message = '';

	let isLoading: boolean = false;
	emailjs.init('1is-3w95AHQhSo6Qq');
	async function sendEmail() {
		isLoading = true;
		try {
			await emailjs.send('service_6a13pyk', 'template_znoaog5', {
				from_name: name,
				from_email: email,
				message: message
			});
			(name = ''), (email = ''), (message = '');
		} catch (e: any) {
			console.log(e);
		}
		isLoading = false;
	}
</script>

<section class="bg-black w-screen h-screen pl-32 flex flex-col justify-center">
	<InViewTransition direction="vertical" delay={300}>
		<div class="text-yellow text-5xl font-bold">Contact me</div>
	</InViewTransition>
	<form class="flex flex-col w-96 my-4 text-amber-100" on:submit|preventDefault={sendEmail}>
		<InViewTransition direction="vertical" delay={400}>
			<input
				required
				class="rounded p-2 mb-2 bg-slate-700 focus:ring-transparent focus:outline-none w-full"
				type="text"
				placeholder="Name"
				bind:value={name}
			/>
		</InViewTransition>
		<InViewTransition direction="vertical" delay={500}>
			<input
				required
				class="rounded p-2 mb-2 bg-slate-700 focus:ring-transparent focus:outline-none w-full"
				type="email"
				placeholder="Email"
				bind:value={email}
			/>
		</InViewTransition>
		<InViewTransition direction="vertical" delay={600}>
			<textarea
				required
				class="rounded p-2 mb-4 bg-slate-700 focus:ring-transparent focus:outline-none w-full"
				placeholder="Message"
				bind:value={message}
			/>
		</InViewTransition>
		<InViewTransition direction="vertical" delay={700}>
			<button
				class={'font-bold text-amber-500 py-2 px-4 rounded transition-colors w-full ' +
					(isLoading ? 'bg-slate-800 cursor-default' : 'bg-slate-500')}
				type="submit"
				disabled={isLoading}
			>
				Submit
			</button>
		</InViewTransition>
	</form>
</section>
