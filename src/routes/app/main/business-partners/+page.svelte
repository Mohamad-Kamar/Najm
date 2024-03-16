<script lang="ts">
	import { AppShell, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { randomDate } from '$lib/utils';
	let tableArr = [
		{ position: 1, name: 'Hydrogen', symbol: 'H', weight: 1.0079, modifiedDate: randomDate() },
		{ position: 2, name: 'Helium', symbol: 'He', weight: 4.0026, modifiedDate: randomDate() },
		{ position: 3, name: 'Lithium', symbol: 'Li', weight: 6.941, modifiedDate: randomDate() },
		{ position: 4, name: 'Beryllium', symbol: 'Be', weight: 9.0122, modifiedDate: randomDate() },
		{ position: 5, name: 'Boron', symbol: 'B', weight: 10.811, modifiedDate: randomDate() },
		{ position: 6, name: 'Carbon', symbol: 'C', weight: 12.0107, modifiedDate: randomDate() },
		{ position: 7, name: 'Nitrogen', symbol: 'N', weight: 14.0067, modifiedDate: randomDate() },
		{ position: 8, name: 'Oxygen', symbol: 'O', weight: 15.9994, modifiedDate: randomDate() },
		{ position: 9, name: 'Fluorine', symbol: 'F', weight: 18.9984, modifiedDate: randomDate() },
		{ position: 10, name: 'Neon', symbol: 'Ne', weight: 20.1797, modifiedDate: randomDate() },
	];
	let valueMultiple: string[] = ['Client', 'Supplier', 'Employee'];
</script>

<AppShell>
	<div class="grid grid-cols-1 divide-y">
		<div class="grid grid-cols-1 divide-x">
			<div>
				<div>
					<label for="from"> From Date </label>
					<input id="from" type="date" class="input bg-white" aria-label="From Date" />
				</div>
				<div>
					<label for="to"> To Date </label>
					<input id="to" type="date" class="input bg-white" aria-label="To Date" />
				</div>
				<div>
					<p>Search Filter</p>
					<ListBox multiple>
						<ListBoxItem bind:group={valueMultiple} name="medium" value="Client">
							Client
						</ListBoxItem>
						<ListBoxItem bind:group={valueMultiple} name="medium" value="Supplier">
							Supplier
						</ListBoxItem>
						<ListBoxItem bind:group={valueMultiple} name="medium" value="Employee">
							Employee
						</ListBoxItem>
					</ListBox>
				</div>
				<div>
					<label for="search-item"> Search Item </label>
					<input
						type="text"
						class="input bg-white"
						placeholder="Search..."
						aria-label="Search Item"
						id="search-item"
					/>
				</div>
			</div>
		</div>
		<div>
			<div class="table-container">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>Position</th>
							<th>Name</th>
							<th>Symbol</th>
							<th>Weight</th>
							<th>Modified Date</th>
						</tr>
					</thead>
					<tbody>
						{#each tableArr as row, i}
							<tr>
								<td>{row.position}</td>
								<td>{row.name}</td>
								<td>{row.symbol}</td>
								<td>{row.weight}</td>
								<td>{row.modifiedDate}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</AppShell>
