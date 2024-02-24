<!-- NavItem.svelte -->
<script lang="ts">
	import DropdownItem from './DropdownItem.svelte';
	import type { DropdownItemStruct } from '../Types/DropdownItem';
	export let item: DropdownItemStruct;
	let isOpen = false;
</script>

<div
	class="relative h-full w-full"
	on:mouseenter={() => (isOpen = true)}
	on:mouseleave={() => (isOpen = false)}
	role="menu"
	aria-label="Dropdown menu"
	tabindex="0"
>
	<button
		class="h-full w-full bg-blue-600 px-4 py-2 text-white hover:underline"
		aria-haspopup="true"
		aria-expanded={isOpen}
	>
		{item.name}
	</button>
	{#if isOpen && item.items && item.items.length > 0}
		<ul
			class="absolute top-full mt-2 w-48 bg-white shadow-md"
			style="top: calc(100% - 10px)"
			on:mouseenter={() => (isOpen = true)}
			on:mouseleave={() => (isOpen = false)}
			role="menu"
			tabindex="0"
		>
			{#each item.items as subItem}
				<li class="bg-white p-2 text-blue-600 hover:bg-blue-600 hover:text-white" role="menuitem">
					<a href={subItem.page_name ? subItem.page_name : '#'}>
						<DropdownItem item={subItem} />
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
