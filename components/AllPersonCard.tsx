import { getAllPerson } from "@/services";
import { Person } from "@/types/Person";
import PersonCard from "./PersonCard";

export default async function AllPersonCard() {
	const persons: Person[] = await getAllPerson();
	return (
		<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
			<div className="mb-8">
				<h2 className="text-3xl font-bold text-white mb-2 font-bangla">
					সদস্যদের হিসাব
				</h2>
				<p className="text-gray-300 font-[family-name:var(--font-geist-sans)]">
					Members&apos; Expense Summary
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{persons.map((person, index) => (
					<PersonCard key={index} person={person} />
				))}
			</div>
		</main>
	);
}
