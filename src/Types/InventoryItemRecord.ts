export type InventoryItemRow = {
	itemName: string;
	quantityOrdered: number;
	totalUnits: number;
	soldTo: string;
	priceOfSale: number;
};

export type InventoryItemRecord = InventoryItemRow[];
