<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import './../../../app.pcss';
	import AppSideBar from './AppSideBar.svelte';
</script>

<div style="display: contents" class="h-full overflow-hidden">
	<AppShell>
		<svelte:fragment slot="sidebarLeft"><AppSideBar /></svelte:fragment>
		<svelte:fragment slot="pageHeader">
			<div class="flex flex-row">
				<div class="flex-initial">Financial Operations</div>
				<div class="flex-initial">Invoicing</div>
				<div class="flex-initial">Reports</div>
				<div class="flex-initial">Purchacing</div>
				<div class="flex-initial">Chat History</div>
			</div>
		</svelte:fragment>
		<slot />
	</AppShell>
</div>
