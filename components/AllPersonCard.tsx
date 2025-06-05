import { PersonsProps } from "@/types/Props";
import Link from "next/link";
import PersonCard from "./PersonCard";

export default async function AllPersonCard({ persons }: PersonsProps) {
	const names = persons
		.slice()
		.sort((a, b) => a.meals - b.meals)
		.map((person) => person.name);

	return (
		<main className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-2">
			<div className="mb-8">
				<h2 className="text-3xl font-bold text-white mb-2 font-bangla">
					সদস্যদের হিসাব
				</h2>
				<p className="text-gray-300 font-[family-name:var(--font-geist-sans)]">
					Member&apos;s Expense Summary
				</p>
			</div>
			<NameNavigation names={names} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{persons.map((person, index) => (
					<PersonCard key={index} person={person} i={index} />
				))}
			</div>
		</main>
	);
}

function NameNavigation({ names }: { names: string[] }) {
	return (
		<div className="bg-gray-900 p-6 rounded-xl shadow-inner mb-6">
			<h2 className="text-lg font-normal text-gray-300 mb-4">
				Click on your name
			</h2>

			<div className="flex flex-wrap gap-2">
				{names?.map((memberName, i) => (
					<Link
						href={`#${memberName}`}
						key={i + memberName}
						className={`
			inline-block
			px-6 py-2
			rounded-full
			text-sm font-medium
			text-gray-300 bg-gradient-to-br hover:from-emerald-400 hover:to-emerald-600
			from-green-600 to-emerald-800
			focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2
			transition-all duration-200
			active:scale-95 shadow-md hover:shadow-lg
		  `}
					>
						{memberName}
					</Link>
				))}
			</div>
		</div>
	);
}
