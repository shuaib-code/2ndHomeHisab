export type Status = "Paid" | "Pending" | "Dued" | "Closed";

export interface Person {
	name: string;
	bazarDuty: number;
	paidBazar: number;
	bazar: number;
	bazarTotal: number;
	meals: number;
	mealExpense: number;
	electricity: number;
	gas: number;
	maid: number;
	utilityTotal: number;
	pastDue: number;
	amount: number;
	status: Status;
	currentDue: number;
}

export const statusColor: Record<Status, string> = {
	Paid: "bg-green-500",
	Pending: "bg-yellow-500",
	Dued: "bg-red-500",
	Closed: "bg-gray-400",
};
