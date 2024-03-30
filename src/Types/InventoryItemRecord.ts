export type InventoryItemRow = {
	itemName: string;
	quantityOrdered: number;
	totalUnits: number;
	soldTo: string;
	priceOfSale: number;
};

export type InventoryItemRecord = InventoryItemRow[];

export type InventoryItemInfo = {
	InventoryItemName: string;
	InventoryItemDescription: string;
	InventoryItemPriceOfPurchace: number;
	InventoryItemUnitsInStock: number;
	InventoryItemUnitsInvoiced: number;
	InventoryItemTotalQuantityOfPurchace: number;
};
