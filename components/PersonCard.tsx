import type { Person } from "@/types/Person";

type Props = {
	person: Person;
	i: number;
};

export default function PersonCard({ person, i }: Props) {
	const isOwed = person.amount < 0;
	const absoluteAmount = Math.abs(person.amount);
	const isSettled = person.amount === 0;

	return (
		<div
			id={person.name}
			className={`relative overflow-hidden card-animated bg-gray-900 rounded-3xl p-4 max-w-md w-full font-bangla animate-zoomIn border border-gray-800 `}
			style={{ animationDelay: `${i * 100}ms` }}
		>
			{/* Header Section */}

			<h1 className="absolute text-gray-500/10 -z-10 left-1/8 top-25 -rotate-30 text-8xl font-bold mb-2 font-[family-name:var(--font-geist-sans)]">
				{person.name}
			</h1>
			<div className="flex items-start justify-between mb-8 p-1">
				<div>
					<h1 className="text-white text-3xl font-bold mb-2 font-[family-name:var(--font-geist-sans)]">
						{person.name}
					</h1>
				</div>
				<div
					className={`px-4 py-2 rounded-full text-sm font-medium transition
						${
							isSettled
								? "bg-gradient-to-br from-blue-500 to-blue-800 text-blue-100"
								: isOwed
								? "bg-gradient-to-br from-emerald-500 to-emerald-800 text-emerald-100"
								: "bg-gradient-to-br from-red-500 to-red-800 text-red-100"
						}
					  `}
				>
					{isSettled ? "সমান" : isOwed ? "পাবেন" : "দিতে হবে"}
				</div>
			</div>

			{/* Details Section */}
			<div className="space-y-4 mb-6 p-1">
				<div className="flex justify-between text-gray-300">
					<span>বাজার খরচ:</span>
					<span className="font-medium">
						৳{" "}
						<span className="font-[family-name:var(--font-geist-sans)]">
							{person.bazarTotal}
						</span>
					</span>
				</div>
				<div className="flex justify-between text-gray-300">
					<span>মোট মিল:</span>
					<span className="font-medium">
						<span className="font-[family-name:var(--font-geist-sans)]">
							{person.meals}{" "}
						</span>
						টা
					</span>
				</div>
				<div className="flex justify-between text-gray-300">
					<span>মিল খরচ:</span>
					<span className="font-medium">
						৳{" "}
						<span className="font-[family-name:var(--font-geist-sans)]">
							{person.mealExpense}
						</span>
					</span>
				</div>
			</div>

			{/* Amount Section */}
			<div
				className={`rounded-2xl p-6 ${
					isSettled
						? "bg-blue-900/30 border border-blue-700/50"
						: isOwed
						? "bg-emerald-900/30 border border-emerald-700/50"
						: "bg-red-900/30 border border-red-700/50"
				}`}
			>
				<p className="text-gray-400 text-lg mb-6">
					{isSettled ? "হিসাব সমান" : isOwed ? "আপনি পাবেন" : "আপনাকে দিতে হবে"}
				</p>

				<div className="flex items-center justify-between">
					<div
						className={`text-5xl font-bold tracking-tight ${
							isSettled
								? "text-blue-400"
								: isOwed
								? "text-emerald-400"
								: "text-red-400"
						}`}
					>
						৳
						<span className="pl-1">
							<span className="font-[family-name:var(--font-geist-sans)]">
								{absoluteAmount}
							</span>
						</span>
					</div>
					<div
						className={`flex items-center gap-3 rounded-full px-4 py-2 ${
							isSettled
								? "bg-blue-800"
								: isOwed
								? "bg-emerald-800"
								: "bg-red-800"
						}`}
					>
						<div
							className={`w-3 h-3 rounded-full ${
								isSettled
									? "bg-blue-400"
									: isOwed
									? "bg-emerald-400"
									: "bg-red-400"
							}`}
						></div>
						<span className="text-white font-medium">
							{isSettled ? "সমাপ্ত" : isOwed ? "পাওনা" : "বকেয়া"}
						</span>
					</div>
				</div>

				<div className="mt-4 text-center font-[family-name:var(--font-geist-sans)]">
					<p
						className={`text-sm font-medium ${
							isSettled
								? "text-blue-300"
								: isOwed
								? "text-emerald-300"
								: "text-red-300"
						}`}
					>
						{isSettled
							? "All settled! No amount due"
							: isOwed
							? `You will get ৳${absoluteAmount}`
							: `You have to pay ৳${absoluteAmount}`}
					</p>
				</div>
			</div>
		</div>
	);
}
