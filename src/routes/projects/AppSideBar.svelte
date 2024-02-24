<script lang="ts">
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	let currentTile: number = 0;
</script>

<AppRail width="28">
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/">
			<img class="h-28 w-28 object-fill" src="/najm-logo.png" alt="Najm Logo" />
		</AppRailAnchor>
	</svelte:fragment>
	<!-- --- -->
	<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
		<span>Home</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<span>Clients</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<span>Active Projects</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={3} title="tile-3">
		<span>All Projects</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={4} title="tile-3">
		<span>Reporting</span>
	</AppRailTile>
	<!-- --- -->
	<svelte:fragment slot="trail">
		<AppRailAnchor href="/" target="_blank" title="Account">Chat With Najm</AppRailAnchor>
	</svelte:fragment>
</AppRail>
