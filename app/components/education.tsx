import { GraduationCap } from "lucide-react";

export default function Education() {
	return (
		<div className="my-8 block space-y-3 md:space-y-0 md:flex w-full gap-x-2">
			<div className="flex gap-x-3 h-16 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
				<div className="flex items-center">
					<GraduationCap className="text-neutral-300" size={22} />
				</div>
				<p className="">HBO Bachelor Software Engineer (2024)</p>
			</div>
			<div className="flex gap-x-3 h-16 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
				<div className="flex items-center">
					<GraduationCap className="text-neutral-300" size={22} />
				</div>
				<p>MBO Bachelor Application and Media Development (2019)</p>
			</div>
		</div>
	);
}
