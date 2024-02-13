<script lang="ts">
	import DropdownItem from './DropdownItem.svelte';

	interface DropdownItem {
		name: string;
		items: DropdownItem[];
	}

	const featuresItems: DropdownItem[] = [
		{ name: 'Your Partners', items: [] },
		{ name: 'Accounting', items: [] },
		{ name: 'Project Management', items: [] }
	];

	const resourcesItems: DropdownItem[] = [
		{ name: 'Sharing Is Caring', items: [] },
		{ name: 'Tools', items: [] },
		{ name: 'Support', items: [] }
	];

	const plansItems: DropdownItem[] = [
		{ name: 'Professional', items: [] },
		{ name: 'Company', items: [] },
		{ name: 'Other', items: [] }
	];
</script>

<nav class="bg-gradient-theme text-white p-4">
	<ul class="flex flex-row justify-between">
		<li><DropdownItem item={{ name: 'Najm Accounting Services', items: [] }} /></li>
		<li><DropdownItem item={{ name: 'Features', items: featuresItems }} /></li>
		<li><DropdownItem item={{ name: 'Resources', items: resourcesItems }} /></li>
		<li><DropdownItem item={{ name: 'Our Plans', items: plansItems }} /></li>
	</ul>
</nav>