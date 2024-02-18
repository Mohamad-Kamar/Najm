<!-- DropdownItem.svelte -->
<script lang="ts">
	import DropdownItem from './DropdownItem.svelte';
	import type { DropdownItemStruct } from '../Types/DropdownItem';
	export let item: DropdownItemStruct;
	export let dropDirection: 'bottom' | 'left-full' = 'bottom';
	let isOpen = false;
</script>

<div
	class="relative w-full h-full"
	on:mouseenter={() => (isOpen = true)}
	on:mouseleave={() => (isOpen = false)}
	role="menu"
	aria-label="Dropdown menu"
	tabindex="0"
>
	<button
		class="hover:underline text-white bg-blue-500 px-4 py-2 rounded-md w-full h-full"
		aria-haspopup="true"
		aria-expanded={isOpen}
	>
		{item.name}
	</button>
	{#if isOpen && item.items && item.items.length > 0}
		<ul
			class={`absolute ${dropDirection === 'bottom' ? 'top-full mt-2' : 'left-full top-0'} bg-white shadow-md w-48`}
			on:mouseenter={() => (isOpen = true)}
			on:mouseleave={() => (isOpen = false)}
			role="menu"
			tabindex="0"
		>
			{#each item.items as subItem}
				<li class="hover:bg-blue-700 hover:text-white p-2 text-blue-500 bg-white" role="menuitem">
					<a href={subItem.page_name ? subItem.page_name : '#'}>
						<DropdownItem item={subItem} dropDirection="left-full" />
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
