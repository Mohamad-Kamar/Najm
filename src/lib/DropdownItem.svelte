<!-- DropdownItem.svelte -->
<script lang="ts">
	import DropdownItem from './DropdownItem.svelte'; // Normally not needed for self-reference
	export let item: { name: string; items: { name: string; items: any[] }[] };
    export let dropDirection = "bottom";
	let isOpen = false;
</script>

<div class="relative">
	<button on:mouseenter={() => (isOpen = true)} on:mouseleave={() => (isOpen = false)}
        class="hover:underline text-white bg-blue-500 px-4 py-2 rounded-md">{item.name}
    </button>
	{#if isOpen && item.items && item.items.length > 0}
        <div class="absolute left-full top-0 bg-white shadow-md mt-2 w-48">
            <ul>
				{#each item.items as subItem}
					<li class="hover:bg-gray-100 p-2">
						<!-- Correctly pass subItem as item -->
						<DropdownItem item={subItem} />
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
