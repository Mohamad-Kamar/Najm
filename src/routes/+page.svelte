<script>
	import { AppShell } from '@skeletonlabs/skeleton';

	import Header from '../lib/Header.svelte';
	import '../app.pcss';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Header />
		<h1 class="mt-8 text-center text-3xl font-bold underline">
			Najm Landing Page: View the product
		</h1>
	</svelte:fragment>
</AppShell>
