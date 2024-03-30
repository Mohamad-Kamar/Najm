export type InventoryItemRecordRow = {
	itemName: string;
	quantityOrdered: number;
	totalUnits: number;
	soldTo: string;
	priceOfSale: number;
};

export type InventoryItemRecord = InventoryItemRecordRow[];

export type InventoryItemInfo = {
	InventoryItemName: string;
	InventoryItemDescription: string;
	InventoryItemPriceOfPurchace: number;
	InventoryItemUnitsInStock: number;
	InventoryItemUnitsInvoiced: number;
	InventoryItemTotalQuantityOfPurchace: number;
};
