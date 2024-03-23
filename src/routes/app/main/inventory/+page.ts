import { PUBLIC_HOSTING_URL } from '$env/static/public';

export async function load({ params }) {
	const itemsTableData = await (await fetch(`${PUBLIC_HOSTING_URL}/inventoryItems.json`)).json();
	return {
		itemsTableData,
	};
}
