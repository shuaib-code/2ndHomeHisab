import AllPersonCard from "@/components/AllPersonCard";

export default async function Home() {
	return (
		<div className="min-h-screen px-4 pt-10 pb-10 font-[family-name:var(--font-geist-sans)] bg-black/90">
			<AllPersonCard />
		</div>
	);
}
