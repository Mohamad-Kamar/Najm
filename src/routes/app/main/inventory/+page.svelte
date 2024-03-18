<script lang="ts">
	import { AppShell, ListBox, ListBoxItem, Autocomplete, InputChip } from '@skeletonlabs/skeleton';
	import type { InventoryItemRecord } from '../../../../Types/InventoryItemRecord';
	let popupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom',
	};
	let valueMultiple: string[] = ['Client', 'Supplier', 'Employee'];

	let itemsTable: InventoryItemRecord = [
		{ itemName: 'banana', quantityOrdered: 3, totalUnits: 5, soldTo: 'client', priceOfSale: 5.0 },
		{
			itemName: 'apple',
			quantityOrdered: 5,
			totalUnits: 10,
			soldTo: 'supplier',
			priceOfSale: 10.0,
		},
		{
			itemName: 'orange',
			quantityOrdered: 7,
			totalUnits: 15,
			soldTo: 'employee',
			priceOfSale: 15.0,
		},
		{ itemName: 'grape', quantityOrdered: 9, totalUnits: 20, soldTo: 'client', priceOfSale: 20.0 },
		{
			itemName: 'pear',
			quantityOrdered: 11,
			totalUnits: 25,
			soldTo: 'supplier',
			priceOfSale: 25.0,
		},
		{
			itemName: 'peach',
			quantityOrdered: 13,
			totalUnits: 30,
			soldTo: 'employee',
			priceOfSale: 30.0,
		},
		{ itemName: 'plum', quantityOrdered: 15, totalUnits: 35, soldTo: 'client', priceOfSale: 35.0 },
		{
			itemName: 'kiwi',
			quantityOrdered: 17,
			totalUnits: 40,
			soldTo: 'supplier',
			priceOfSale: 40.0,
		},
		{
			itemName: 'mango',
			quantityOrdered: 19,
			totalUnits: 45,
			soldTo: 'employee',
			priceOfSale: 45.0,
		},
		{
			itemName: 'papaya',
			quantityOrdered: 21,
			totalUnits: 50,
			soldTo: 'client',
			priceOfSale: 50.0,
		},
		{
			itemName: 'watermelon',
			quantityOrdered: 23,
			totalUnits: 55,
			soldTo: 'supplier',
			priceOfSale: 55.0,
		},
		{
			itemName: 'cantaloupe',
			quantityOrdered: 25,
			totalUnits: 60,
			soldTo: 'employee',
			priceOfSale: 60.0,
		},
		{
			itemName: 'honeydew',
			quantityOrdered: 27,
			totalUnits: 65,
			soldTo: 'client',
			priceOfSale: 65.0,
		},
		{
			itemName: 'cucumber',
			quantityOrdered: 29,
			totalUnits: 70,
			soldTo: 'supplier',
			priceOfSale: 70.0,
		},
		{
			itemName: 'tomato',
			quantityOrdered: 31,
			totalUnits: 75,
			soldTo: 'employee',
			priceOfSale: 25,
		},
		{
			itemName: 'apple',
			quantityOrdered: 33,
			totalUnits: 80,
			soldTo: 'client',
			priceOfSale: 80.0,
		},
		{
			itemName: 'orange',
			quantityOrdered: 35,
			totalUnits: 85,
			soldTo: 'supplier',
			priceOfSale: 85.0,
		},
		{
			itemName: 'grape',
			quantityOrdered: 37,
			totalUnits: 90,
			soldTo: 'employee',
			priceOfSale: 90.0,
		},
		{
			itemName: 'pear',
			quantityOrdered: 39,
			totalUnits: 95,
			soldTo: 'client',
			priceOfSale: 95.0,
		},
		{
			itemName: 'peach',
			quantityOrdered: 41,
			totalUnits: 100,
			soldTo: 'supplier',
			priceOfSale: 100.0,
		},
		{
			itemName: 'plum',
			quantityOrdered: 43,
			totalUnits: 105,
			soldTo: 'employee',
			priceOfSale: 105.0,
		},
		{
			itemName: 'kiwi',
			quantityOrdered: 45,
			totalUnits: 110,
			soldTo: 'client',
			priceOfSale: 110.0,
		},
		{
			itemName: 'mango',
			quantityOrdered: 47,
			totalUnits: 115,
			soldTo: 'supplier',
			priceOfSale: 115.0,
		},
		{
			itemName: 'papaya',
			quantityOrdered: 49,
			totalUnits: 120,
			soldTo: 'employee',
			priceOfSale: 120.0,
		},
		{
			itemName: 'watermelon',
			quantityOrdered: 51,
			totalUnits: 125,
			soldTo: 'client',
			priceOfSale: 125.0,
		},
		{
			itemName: 'cantaloupe',
			quantityOrdered: 53,
			totalUnits: 130,
			soldTo: 'supplier',
			priceOfSale: 130.0,
		},
		{
			itemName: 'honeydew',
			quantityOrdered: 55,
			totalUnits: 135,
			soldTo: 'employee',
			priceOfSale: 135.0,
		},
	];

	let selectedItemNames: string[] = [];
	$: selectedItems = itemsTable.filter((item) => selectedItemNames.includes(item.itemName));
	let searchString = '';
	function onItemSelection(event: CustomEvent): void {
		selectedItemNames = [...selectedItemNames, event.detail.label];
		searchString = '';
	}
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
							options={itemsTable.map((item) => ({
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

	<section>
		<div>
			<h1>Item Details:</h1>
		</div>
	</section>

	<section>
		<h1>Item Record</h1>
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Item Name</th>
						<th>Quantity Ordered</th>
						<th>Total Units</th>
						<th>Sold To</th>
						<th>Price of Sale</th>
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
