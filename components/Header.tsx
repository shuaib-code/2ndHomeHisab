import { getAllPerson } from "@/services";
import { Person } from "@/types/Person";
import {
	Calculator,

	ShoppingCart,
	Soup,
	Users,
	Utensils,
} from "lucide-react";
import { Brand } from "./Brand";

export default async function Header() {
	const allPersonData: Person[] = await getAllPerson();
	const totalPeople = allPersonData.length;
	const totalBazarCost = allPersonData.reduce(getTotalBazarCost, 0);
	const totalMeals = allPersonData.reduce(getTotalMeal, 0);

	return (
		<header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Top Navigation */}
				<div className="flex items-center justify-between h-16">
					<Brand/>
					<div className="md:flex items-center space-x-4 font-bangla hidden">
						<div className="relative">
							<input
								type="text"
								placeholder="নাম খুঁজুন..."
								className="bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
							/>
							<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
								<Calculator className="h-4 w-4" />
							</span>
						</div>
						<button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
							নতুন যোগ করুন
						</button>
					</div>
				</div>

				{/* Stats Section */}
				<div className="py-6">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<StatCard
							label="মোট সদস্য"
							value={totalPeople}
							icon={<Users className="h-8 w-8 text-blue-400" />}
							subtext="Total Members"
						/>
						<StatCard
							label="মোট মিল"
							value={totalMeals}
							icon={<Utensils className="h-8 w-8 text-yellow-400" />}
							subtext="Total Meals"
						/>
						<StatCard
							label="মিল রেট"
							value={
								totalMeals > 0
									? `৳ ${(totalBazarCost / totalMeals).toFixed(2)}`
									: "৳0.00"
							}
							icon={<Soup className="h-8 w-8 text-indigo-400" />}
							subtext="Meal Rate"
						/>

						<StatCard
							label="মোট বাজার খরচ"
							value={`৳${totalBazarCost.toLocaleString()}`}
							icon={<ShoppingCart className="h-8 w-8 text-pink-400" />}
							subtext="Total Bazar Cost"
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

function getTotalBazarCost(total: number, person: Person) {
	return total + person.bazarTotal;
}
function getTotalMeal(total: number, person: Person) {
	return total + person.meals;
}

function StatCard({
	label,
	value,
	icon,
	subtext,
}: {
	label: string;
	value: number | string;
	icon: React.ReactNode;
	subtext: string;
}) {
	return (
		<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
			<div className="flex items-center justify-between">
				<div>
					<p className="text-gray-400 text-sm font-bangla">{label}</p>
					<p className="text-2xl font-bold text-white font-[family-name:var(--font-geist-sans)]">
						{value}
					</p>
					<p className="text-xs text-gray-500 font-[family-name:var(--font-geist-sans)]">
						{subtext}
					</p>
				</div>
				{icon}
			</div>
		</div>
	);
}
