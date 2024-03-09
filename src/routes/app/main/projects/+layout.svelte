<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import AppSideBar from './AppSideBar.svelte';
	import '../../app.pcss';
</script>

<div style="display: contents" class="h-full overflow-hidden">
	<AppShell>
		<svelte:fragment slot="sidebarLeft"><AppSideBar /></svelte:fragment>
		<slot />
	</AppShell>
</div>
