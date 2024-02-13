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
	<!-- Added tabindex -->
	<button
		class="hover:underline text-white bg-blue-500 px-4 py-2 rounded-md w-full h-full"
		aria-haspopup="true"
		aria-expanded={isOpen}
	>
		{item.name}
	</button>
	{#if isOpen && item.items && item.items.length > 0}
		<div
			class={`absolute ${dropDirection === 'bottom' ? 'top-full mt-2' : 'left-full top-0'} bg-white shadow-md w-48`}
			on:mouseenter={() => (isOpen = true)}
			on:mouseleave={() => (isOpen = false)}
			role="menu"
			tabindex="0"
		>
			<!-- Added tabindex -->
			<ul class="bg-blue-500">
				{#each item.items as subItem}
					<li class="hover:bg-blue-700 hover:text-white p-2 text-blue-500 bg-white" role="menuitem">
						<DropdownItem item={subItem} dropDirection="left-full" />
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
