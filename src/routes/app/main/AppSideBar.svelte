<script lang="ts">
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	let currentTile: number = 0;
</script>

<AppRail width="28">
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/">
			<img class="h-40 w-40 object-fill" src="/najm-logo.png" alt="Najm Logo" />
		</AppRailAnchor>
	</svelte:fragment>
	<!-- --- -->
	<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
		<span>Inventory</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<span>Business Partners</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<span>Financial Boxes</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={3} title="tile-3">
		<span>Projects</span>
	</AppRailTile>
</AppRail>
