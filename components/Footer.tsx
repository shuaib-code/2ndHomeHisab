import { Github, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Brand } from "./Brand";

export default function Footer() {
	return (
		<footer className="bg-gray-900 border-t border-gray-700 mt-12 font-bangla">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand Section */}
					<div className="col-span-1 md:col-span-2">
						<Brand />

						<p className="text-gray-400 mb-4 leading-relaxed">
							সহজ এবং কার্যকর উপায়ে আপনার দৈনন্দিন খাবার ও বাজারের খরচ ট্র্যাক
							করুন। বন্ধুদের সাথে খরচ ভাগাভাগি করুন এবং হিসাব রাখুন।
						</p>
						<p className="text-gray-500 text-sm font-[family-name:var(--font-geist-sans)]">
							Track your daily meal and grocery expenses easily. Share costs
							with friends and keep accurate records.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-white font-semibold mb-4">দ্রুত লিংক</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-emerald-400 transition-colors"
								>
									হোম
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-emerald-400 transition-colors"
								>
									নতুন সদস্য
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-emerald-400 transition-colors"
								>
									রিপোর্ট
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-emerald-400 transition-colors"
								>
									সেটিংস
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-white font-semibold mb-4">যোগাযোগ</h4>
						<div className="space-y-3">
							<div className="flex items-center space-x-2 text-gray-400">
								<Mail className="h-4 w-4" />
								<span className="text-sm font-[family-name:var(--font-geist-sans)]">
									mohammadshuaib233@gmail.com
								</span>
							</div>
							<div className="flex items-center space-x-2 text-gray-400">
								<Phone className="h-4 w-4" />
								<span className="text-sm">+880 1894-772740</span>
							</div>
							<div className="flex items-center space-x-2 text-gray-400">
								<Github className="h-4 w-4" />
								<Link
									href={"https://github.com/shuaib-code"}
									className="text-sm hover:text-emerald-400 transition-colors"
								>
									GitHub
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-700 mt-8 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm mb-4 md:mb-0">
							© 2024 খাবার হিসাব। সকল অধিকার সংরক্ষিত।
						</p>
						<div className="flex space-x-6">
							<a
								href="#"
								className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
							>
								গোপনীয়তা নীতি
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
							>
								ব্যবহারের শর্তাবলী
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
							>
								সাহায্য
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
