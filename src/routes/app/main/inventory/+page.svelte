<script lang="ts">
	import { AppShell, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	let tableArr = [
		{ position: 1, name: 'Hydrogen', symbol: 'H', weight: 1.0079 },
		{ position: 2, name: 'Helium', symbol: 'He', weight: 4.0026 },
		{ position: 3, name: 'Lithium', symbol: 'Li', weight: 6.941 },
		{ position: 4, name: 'Beryllium', symbol: 'Be', weight: 9.0122 },
		{ position: 5, name: 'Boron', symbol: 'B', weight: 10.811 },
		{ position: 6, name: 'Carbon', symbol: 'C', weight: 12.0107 },
		{ position: 7, name: 'Nitrogen', symbol: 'N', weight: 14.0067 },
		{ position: 8, name: 'Oxygen', symbol: 'O', weight: 15.9994 },
		{ position: 9, name: 'Fluorine', symbol: 'F', weight: 18.9984 },
		{ position: 10, name: 'Neon', symbol: 'Ne', weight: 20.1797 },
	];

	const totalWeight = tableArr.reduce((acc, row) => acc + row.weight, 0);
	let valueMultiple: string[] = ['Client', 'Supplier', 'Employee'];
</script>

<AppShell>
	<section class="flex justify-between bg-white">
		<div class="flex w-3/6 justify-around">
			<div class="flex flex-col">
				<label class="p-1" for="from">From Date</label>
				<label class="p-1" for="to">To Date</label>
				<label class="p-1" for="search-item">Search Item</label>
			</div>
			<div class="flex flex-col">
				<input id="from" type="date" class="input w-40 bg-white p-1" aria-label="From Date" />
				<input id="to" type="date" class="input w-40 bg-white p-1" aria-label="To Date" />
				<input
					type="text"
					class="input w-40 bg-white p-1"
					placeholder="Search..."
					aria-label="Search Item"
					id="search-item"
				/>
			</div>
		</div>
		<div class="flex h-full w-3/6 justify-around">
			<div class="flex h-full flex-col justify-center">
				<p>Filter by</p>
			</div>
			<ListBox multiple>
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
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Position</th>
						<th>Name</th>
						<th>Symbol</th>
						<th>Weight</th>
					</tr>
				</thead>
				<tbody>
					{#each tableArr as row, i}
						<tr>
							<td>{row.position}</td>
							<td>{row.name}</td>
							<td>{row.symbol}</td>
							<td>{row.weight}</td>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr>
						<th colspan="3">Calculated Total Weight</th>
						<td>{totalWeight}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</section>
</AppShell>
