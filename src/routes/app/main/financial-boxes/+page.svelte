<script>
	import { AppShell } from '@skeletonlabs/skeleton';
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
</script>

<AppShell>
	<div class="grid grid-cols-1 divide-y">
		<div class="grid grid-cols-2 divide-x">
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
			<div>
				<div>
					<p>Filter by</p>
				</div>
			</div>
		</div>
		<div>
			<!-- Responsive Container (recommended) -->
			<div class="table-container">
				<!-- Native Table Element -->
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
		</div>
	</div>
</AppShell>
