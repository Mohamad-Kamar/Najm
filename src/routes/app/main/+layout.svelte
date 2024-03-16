<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import './../../../app.pcss';
	import AppSideBar from './AppSideBar.svelte';
</script>

<div style="display: contents" class="h-full overflow-hidden">
	<AppShell>
		<svelte:fragment slot="sidebarLeft"><AppSideBar /></svelte:fragment>
		<svelte:fragment slot="pageHeader">
			<nav class="h-16 bg-surface-500 text-secondary-500">
				<ul class="flex h-16 flex-row justify-evenly">
					<li class="variant-filled btn rounded">Financial Operations</li>
					<li class="variant-filled btn rounded">Invoicing</li>
					<li class="variant-filled btn rounded">Reports</li>
					<li class="variant-filled btn rounded">Purchacing</li>
					<li class="variant-filled btn rounded">Chat History</li>
				</ul>
			</nav>
		</svelte:fragment>
		<section class="container mx-auto p-8">
			<slot />
		</section>
	</AppShell>
</div>
