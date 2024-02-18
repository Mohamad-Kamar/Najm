<script lang="ts">
	import DropdownItem from './DropdownItem.svelte';
	import { featuresItems, resourcesItems, plansItems } from './../constants/LPHeaderItems';
</script>

<nav class="bg-gradient-theme text-white p-0 h-16">
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
