import { PUBLIC_HOSTING_URL } from '$env/static/public';

export async function load({ params }) {
	const itemsRecordTableData = await (await fetch(`${PUBLIC_HOSTING_URL}/inventoryItemsRecords.json`)).json();
	const inventoryItemsInfo = await (await fetch(`${PUBLIC_HOSTING_URL}/inventoryItemsInfo.json`)).json();
	return {
		itemsRecordTableData,
        inventoryItemsInfo,
	};
}
