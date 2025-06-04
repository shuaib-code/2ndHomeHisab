import AllPersonCard from "@/components/AllPersonCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getAllPerson } from "@/services";
import { Person } from "@/types/Person";

export default async function Home() {
	const persons: Person[] = await getAllPerson();
	return (
		<>
			<Header />

			<div className="min-h-screen px-4 pt-10 pb-10 font-[family-name:var(--font-geist-sans)] bg-gray-950">
				<AllPersonCard persons={persons} />
			</div>
			<Footer />
		</>
	);
}
