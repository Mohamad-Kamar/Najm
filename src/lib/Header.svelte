<script lang="ts">
	import DropdownItem from './DropdownItem.svelte';
	import { featuresItems, resourcesItems, plansItems } from './../constants/LPHeaderItems';
</script>


		<nav class="bg-gradient-theme h-16 p-0 text-white">
			<ul class="m-0 flex h-full flex-row items-stretch justify-between p-0">
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
