import { PUBLIC_HOSTING_URL } from '$env/static/public';

export async function load({ params }) {
	const businessPartnersRecordTableData = await (await fetch(`${PUBLIC_HOSTING_URL}/businessPartnersRecords.json`)).json();
	const businessPartnersInfoTableData = await (await fetch(`${PUBLIC_HOSTING_URL}/businessPartnersInfo.json`)).json();
	return {
		businessPartnersRecordTableData,
        businessPartnersInfoTableData,
	};
}
