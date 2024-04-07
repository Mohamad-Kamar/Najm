<script lang="ts">
	import { AppShell, ListBox, ListBoxItem, Autocomplete, InputChip } from '@skeletonlabs/skeleton';
	import type {
		InventoryItemRecord,
		InventoryItemRecordRow,
		InventoryItemInfo,
	} from '../../../../Types/InventoryItemTypes';
	export let data;
	let valueMultiple: string[] = ['Client', 'Supplier', 'Employee'];
	let itemsRecordTableData: InventoryItemRecord = data.itemsRecordTableData;
	let inventoryItemsInfo: InventoryItemInfo[] = data.inventoryItemsInfo;

	let selectedItemNames: string[] = [];
	$: selectedItems = itemsRecordTableData.filter((item) =>
		selectedItemNames.includes(item.itemName),
	);

	$: selectedItemsInfo = inventoryItemsInfo.filter((item) =>
		selectedItemNames.includes(item.InventoryItemName),
	);

	let searchString = '';
	function onItemSelection(event: CustomEvent): void {
		selectedItemNames = [...selectedItemNames, event.detail.label];
		searchString = '';
	}

	let isAscending = false; // You can toggle this flag to change the sorting order

	function metaSort(
		sortFunction: (a: InventoryItemRecordRow, b: InventoryItemRecordRow) => number,
		isAscending: boolean,
	): () => void {
		return function (): void {
			isAscending = !isAscending;

			if (isAscending) {
				selectedItems = selectedItems.sort(sortFunction);
			} else {
				selectedItems = selectedItems.sort((a, b) => sortFunction(b, a));
			}
		};
	}

	const sortByName = metaSort((a, b) => a.itemName.localeCompare(b.itemName), isAscending);
	const sortQuantityOrdered = metaSort(
		(a, b) => a.quantityOrdered - b.quantityOrdered,
		isAscending,
	);
	const sortByTotalUnits = metaSort((a, b) => a.totalUnits - b.totalUnits, isAscending);
	const sortBySoldTo = metaSort((a, b) => a.soldTo.localeCompare(b.soldTo), isAscending);
	const sortByPriceOfSale = metaSort((a, b) => a.priceOfSale - b.priceOfSale, isAscending);
</script>

<AppShell>
	<section class="flex h-96 justify-between bg-white">
		<div class="flex w-3/6 justify-around">
			<div class="flex w-3/6 flex-col">
				<label class="p-1" for="from">From Date</label>
				<label class="p-1" for="to">To Date</label>
				<label class="p-1" for="search-item">Search Item</label>
			</div>
			<div class="flex w-3/6 flex-col">
				<input id="from" type="date" class="input w-40 bg-white p-1" aria-label="From Date" />
				<input id="to" type="date" class="input w-40 bg-white p-1" aria-label="To Date" />
				<div>
					<InputChip
						bind:input={searchString}
						bind:value={selectedItemNames}
						name="chips"
						id="search-item"
					/>
					<div class="card max-h-48 w-full max-w-sm overflow-y-auto p-4" tabindex="-1">
						<Autocomplete
							bind:input={searchString}
							options={itemsRecordTableData
								.filter(
									(item, index, self) =>
										self.findIndex((t) => t.itemName === item.itemName) === index,
								)
								.map((item) => ({
									label: item.itemName,
									value: item.itemName,
								}))}
							on:selection={onItemSelection}
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="flex h-full w-3/6 justify-center">
			<div class="flex h-full flex-col justify-center p-4">
				<p>Filter by:</p>
			</div>
			<ListBox multiple class="flex h-full flex-col justify-center">
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Client">Client</ListBoxItem>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Supplier">
					Supplier
				</ListBoxItem>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Employee">
					Employee
				</ListBoxItem>
			</ListBox>
		</div>
	</section>

	<br />

	<section>
		<h1 class="flex justify-center"><strong>Selected Items Details</strong></h1>
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Item Name</th>
						<th>Item Description</th>
						<th>Price Of Purchace</th>
						<th>Units In Stock</th>
						<th>Units Invoiced</th>
						<th>Total Quantity Of Purchace</th>
					</tr>
				</thead>
				<tbody>
					{#each selectedItemsInfo as row}
						<tr>
							<td>{row.InventoryItemName}</td>
							<td>{row.InventoryItemDescription}</td>
							<td>{row.InventoryItemPriceOfPurchace}</td>
							<td>{row.InventoryItemUnitsInStock}</td>
							<td>{row.InventoryItemUnitsInvoiced}</td>
							<td>{row.InventoryItemTotalQuantityOfPurchace}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<br />
	<br />

	<section>
		<h1 class="flex justify-center"><strong>Selected Item Record</strong></h1>
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th on:click={sortByName} class="cursor-pointer">Item Name</th>
						<th on:click={sortQuantityOrdered} class="cursor-pointer">Quantity Ordered</th>
						<th on:click={sortByTotalUnits} class="cursor-pointer">Total Units</th>
						<th on:click={sortBySoldTo} class="cursor-pointer">Sold To</th>
						<th on:click={sortByPriceOfSale} class="cursor-pointer">Price of Sale</th>
					</tr>
				</thead>
				<tbody>
					{#each selectedItems as row}
						<tr>
							<td>{row.itemName}</td>
							<td>{row.quantityOrdered}</td>
							<td>{row.totalUnits}</td>
							<td>{row.soldTo}</td>
							<td>{row.priceOfSale}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</AppShell>
