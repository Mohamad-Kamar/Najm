<script lang="ts">
	import { AppShell, ListBox, ListBoxItem, Autocomplete, InputChip } from '@skeletonlabs/skeleton';
	import type {
		BusinessPartnersInfo,
		BusinessPartnersRecord,
		BusinessPartnersRecordRow,
	} from '../../../../Types/BusinessPartnersTypes';
	export let data;
	let valueMultiple: string[] = ['Client', 'Supplier', 'Employee'];
	let businessPartnersRecordTableData: BusinessPartnersRecord =
		data.businessPartnersRecordTableData;
	let businessPartnersInfoTableData: BusinessPartnersInfo[] = data.businessPartnersInfoTableData;

	let selectedBusinessPartnersNames: string[] = [];
	$: selectedItems = businessPartnersRecordTableData.filter((item) =>
		selectedBusinessPartnersNames.includes(item.businessPartnerName),
	);

	$: selectedItemsInfo = businessPartnersInfoTableData.filter((item) =>
		selectedBusinessPartnersNames.includes(item.BusinessPartnerName),
	);

	let searchString = '';
	function onItemSelection(event: CustomEvent): void {
		selectedBusinessPartnersNames = [...selectedBusinessPartnersNames, event.detail.label];
		searchString = '';
	}

	let isAscending = false; // You can toggle this flag to change the sorting order

	function metaSort(
		sortFunction: (a: BusinessPartnersRecordRow, b: BusinessPartnersRecordRow) => number,
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

	const sortByName = metaSort(
		(a, b) => a.businessPartnerName.localeCompare(b.businessPartnerName),
		isAscending,
	);
	const sortByTransaction = metaSort(
		(a, b) => a.transaction.localeCompare(b.transaction),
		isAscending,
	);
	const sortByTotalBalance = metaSort((a, b) => a.totalBalance - b.totalBalance, isAscending);
	const sortByEventDateString = metaSort(
		(a, b) => a.eventDate.localeCompare(b.eventDate),
		isAscending,
	);
	const sortByUnclaimedInvoice = metaSort(
		(a, b) => a.unclaimedInvoice - b.unclaimedInvoice,
		isAscending,
	);
</script>

<AppShell>
	<section class="flex h-96 justify-between bg-white">
		<div class="flex w-3/6 justify-around">
			<div class="flex w-3/6 flex-col">
				<label class="p-1" for="from">From Date</label>
				<label class="p-1" for="to">To Date</label>
				<label class="p-1" for="search-item">Search Business Partner</label>
			</div>
			<div class="flex w-3/6 flex-col">
				<input id="from" type="date" class="input w-40 bg-white p-1" aria-label="From Date" />
				<input id="to" type="date" class="input w-40 bg-white p-1" aria-label="To Date" />
				<div>
					<InputChip
						bind:input={searchString}
						bind:value={selectedBusinessPartnersNames}
						name="chips"
						id="search-item"
					/>
					<div class="card max-h-48 w-full max-w-sm overflow-y-auto p-4" tabindex="-1">
						<Autocomplete
							bind:input={searchString}
							options={businessPartnersRecordTableData
								.filter(
									(item, index, self) =>
										self.findIndex((t) => t.businessPartnerName === item.businessPartnerName) ===
										index,
								)
								.map((item) => ({
									label: item.businessPartnerName,
									value: item.businessPartnerName,
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
		<h1 class="flex justify-center"><strong>Selected Business Partner Details</strong></h1>
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Business Partner Name</th>
						<th>Business Partner Total Expenses</th>
						<th>Business Partner Total Revenues</th>
						<th>Business Partner Unclaimed Invoices</th>
					</tr>
				</thead>
				<tbody>
					{#each selectedItemsInfo as row}
						<tr>
							<td>{row.BusinessPartnerName}</td>
							<td>{row.BusinessPartnerTotalExpense}</td>
							<td>{row.BusinessPartnerTotalRevenue}</td>
							<td>{row.BusinessPartnerUnclaimedInvoice}</td>
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
						<th on:click={sortByName} class="cursor-pointer">Business Partner Name</th>
						<th on:click={sortByTransaction} class="cursor-pointer">Business Partner Transaction</th
						>
						<th on:click={sortByTotalBalance} class="cursor-pointer"
							>Business Partner Total Balance</th
						>
						<th on:click={sortByEventDateString} class="cursor-pointer">Event Date</th>
						<th on:click={sortByUnclaimedInvoice} class="cursor-pointer">Unclaimed Invoice</th>
					</tr>
				</thead>
				<tbody>
					{#each selectedItems as row}
						<tr>
							<td>{row.businessPartnerName}</td>
							<td>{row.transaction}</td>
							<td>{row.totalBalance}</td>
							<td>{row.eventDate}</td>
							<td>{row.unclaimedInvoice}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</AppShell>
