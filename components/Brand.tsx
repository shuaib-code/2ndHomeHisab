import { Heart } from "lucide-react";

export function Brand() {
	return (
		<div className="flex items-center space-x-2 mb-4 mt-2">
			<div className="bg-emerald-600 p-2 rounded-lg">
				<Heart className="h-6 w-6 text-white" />
			</div>
			<div className="font-[family-name:var(--font-geist-sans)]">
				<h3 className="text-xl font-bold text-white">2nd Home Hisab</h3>
				<p className="text-gray-400 text-sm">Meal Expense Tracker</p>
			</div>
		</div>
	);
}
