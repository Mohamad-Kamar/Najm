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
	const totalWeight = tableArr.reduce((acc, row) => acc + row.weight, 0);
	let valueMultiple: string[] = ['Client', 'Supplier', 'Employee'];
</script>

<AppShell>
	<svelte:fragment slot="header">
		<div class="bg-gradient-theme h-32 w-full text-white">Header</div>
	</svelte:fragment>
	<div class="grid grid-cols-1 divide-y">
		<div class="grid grid-cols-1 divide-x">
			<div>
				<div>
					<label> From Date </label>
				</div>
				<div>
					<label> FromTo Date </label>
				</div>
				<div>
					<label> Search Filter </label>
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
					<label> Search Item </label>
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
