<script lang="ts">
	import { TabGroup, TabAnchor, ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';

	const conicStops: ConicStop[] = [
		{ color: 'rgba(255,255,255,1)', start: 0, end: 10 },
		{ color: 'rgba(255,255,255,0.5)', start: 10, end: 35 },
		{ color: 'rgba(255,255,255,0.25)', start: 35, end: 100 },
	];
</script>

<TabGroup justify="justify-between">
	<TabAnchor href="/projects/sort-by-projects"><span>Sort By Projects</span></TabAnchor>
	<TabAnchor href="/about">Sort By Expenses/Revenues</TabAnchor>
	<TabAnchor href="/about">Import Data</TabAnchor>
	<TabAnchor href="/about">Share</TabAnchor>
</TabGroup>
<ConicGradient stops={conicStops}>(caption)</ConicGradient>
