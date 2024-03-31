export type BusinessPartnersRecordRow = {
	businessPartnerName: string;
	transaction: string;
	totalBalance: number;
	eventDate: string;
	unclaimedInvoice: number;
};

export type BusinessPartnersRecord = BusinessPartnersRecordRow[];

export type BusinessPartnersInfo = {
	BusinessPartnerName: string;
	BusinessPartnerTotalExpense: number;
	BusinessPartnerTotalRevenue: number;
	BusinessPartnerUnclaimedInvoice: number;
};
