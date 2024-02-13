<script lang="ts">
	import DropdownItem from './DropdownItem.svelte';
	import type { DropdownItemStruct } from '../Types/DropdownItem';

	const featuresItems: DropdownItemStruct[] = [
		{
			name: 'Your Partners',
			items: [
				{
					name: 'Invoicing',
					items: []
				}
			]
		},
		{ name: 'Accounting', items: [] },
		{ name: 'Project Management', items: [] }
	];

	const resourcesItems: DropdownItemStruct[] = [
		{ name: 'Sharing Is Caring', items: [] },
		{ name: 'Tools', items: [] },
		{ name: 'Support', items: [] }
	];

	const plansItems: DropdownItemStruct[] = [
		{ name: 'Professional', items: [] },
		{ name: 'Company', items: [] },
		{ name: 'Other', items: [] }
	];
</script>

<nav class="bg-gradient-theme text-white p-4">
	<ul class="flex flex-row justify-between items-stretch h-full p-0 m-0">
		<li class="flex items-center">
			<DropdownItem item={{ name: 'Najm Accounting Services', items: [] }} />
		</li>
		<li class="flex items-center">
			<DropdownItem item={{ name: 'Features', items: featuresItems }} />
		</li>
		<li class="flex items-center">
			<DropdownItem item={{ name: 'Resources', items: resourcesItems }} />
		</li>
		<li class="flex items-center">
			<DropdownItem item={{ name: 'Our Plans', items: plansItems }} />
		</li>
	</ul>
</nav>
