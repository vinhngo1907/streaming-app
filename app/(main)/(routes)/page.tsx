import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<div>
			<UserButton afterSignOutUrl="/"/>
			{/* This is protected route */}
			<ModeToggle />
			<h1 className="text-2xl font-bold">Home Page</h1>
		</div>
	);
}
