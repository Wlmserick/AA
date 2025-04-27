import { useState } from "react";
import { Card } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, Home as HomeIcon, PieChart, UserCircle } from "lucide-react";

const meetings = [
	{
		id: 1,
		title: "Quarterly Performance Review",
		description: "Discussion of Q1 2025 performance and investment opportunities",
		date: "2025-05-15T14:00:00",
		location: "Virtual (Zoom)",
		organizer: "John Kamau",
		agenda: ["Review Q1 performance", "Discuss investment opportunities", "Q&A session"],
		confirmed: "11/15 confirmed",
		type: "next",
		joinLabel: "Join Meeting",
		agendaLabel: "View Agenda",
		daysLeft: 3,
	},
	{
		id: 2,
		title: "Investment Options Discussion",
		description: "Review of potential investment opportunities in real estate sector",
		date: "2025-06-05T14:00:00",
		location: "Virtual Meeting",
		organizer: "Jane Njeri",
		agenda: ["Overview of real estate sector", "Present investment options", "Open discussion"],
		confirmed: "8/12 confirmed",
		type: "upcoming",
		joinLabel: "Join Link",
		agendaLabel: "View Agenda",
		daysLeft: 15,
	},
	{
		id: 3,
		title: "Mid-Year Financial Review",
		description: "Performance analysis and budget adjustments for remainder of 2025",
		date: "2025-07-10T15:00:00",
		location: "Nairobi Business Center, Room 305",
		organizer: "Peter Otieno",
		agenda: [],
		confirmed: "10/15 confirmed",
		type: "upcoming",
		joinLabel: null,
		agendaLabel: "No Agenda Yet",
		daysLeft: 50,
	},
];

const pastMeetings = [
	{
		id: 1,
		title: "Q1 Review Meeting",
		date: "March 15, 2025, 2:00 PM - 4:00 PM",
		attended: "10/12 attended",
		keyDecisions: [
			"Approved KSh 250,000 for real estate investment",
			"Set new contribution amount at KSh 5,000 monthly",
			"Scheduled next investment review for June",
		],
		actions: ["Minutes", "Recording", "Details"],
	},
	{
		id: 2,
		title: "Emergency Fund Allocation",
		date: "February 28, 2025, 3:00 PM - 3:45 PM",
		attended: "14/15 attended",
		keyDecisions: [
			"Created KSh 100,000 emergency fund",
			"Established criteria for emergency fund access",
		],
		actions: ["Minutes", "Details"],
	},
	{
		id: 3,
		title: "Annual General Meeting",
		date: "January 10, 2025, 10:00 AM - 2:00 PM",
		attended: "15/15 attended",
		keyDecisions: [
			"Elected new leadership committee",
			"Approved 2025 investment strategy",
			"Set annual goals and KPIs",
		],
		actions: ["Minutes", "Recording", "Details"],
	},
];

export const Meetings = (): JSX.Element => {
	const navigate = useNavigate();
	const [showAgenda, setShowAgenda] = useState<number | null>(null);
	const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
	const [voteSuccess, setVoteSuccess] = useState(false);

	return (
		<div className="bg-[#F6FAF9] min-h-screen pb-20">
			{/* Header */}
			<div className="px-6 pt-6 pb-2 flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-[#18181B]">Meetings</h1>
					<p className="text-[#6B7280] text-base">Schedule and manage chama meetings</p>
				</div>
				<button className="bg-[#24a399] text-white font-semibold rounded-xl px-5 py-2 text-lg">
					+ New Meeting
				</button>
			</div>

			{/* Next Meeting */}
			<div className="px-4 mt-4">
				<Card className="rounded-2xl border border-[#E6E6E6] p-4">
					<div className="flex items-center gap-2 mb-2">
						<span className="text-[#24a399]">
							<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
								<rect
									x="3"
									y="4"
									width="18"
									height="18"
									rx="4"
									stroke="#24a399"
									strokeWidth="2"
								/>
								<path d="M16 2v4M8 2v4M3 10h18" stroke="#24a399" strokeWidth="2" />
							</svg>
						</span>
						<span className="font-bold text-lg text-[#18181B]">Next Meeting</span>
						<span className="ml-auto bg-[#F3E8FF] text-[#7C3AED] rounded-xl px-3 py-1 text-xs font-semibold flex items-center gap-1">
							<svg width="14" height="14" fill="none" viewBox="0 0 24 24">
								<circle cx="12" cy="12" r="10" stroke="#7C3AED" strokeWidth="2" />
								<path
									d="M12 6v6l4 2"
									stroke="#7C3AED"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
							In {meetings[0].daysLeft} days
						</span>
					</div>
					<div className="bg-[#F8F8FA] rounded-xl p-4 mb-2">
						<div className="font-bold text-xl text-[#18181B] mb-1">
							{meetings[0].title}
						</div>
						<div className="text-[#6B7280] mb-3">{meetings[0].description}</div>
						<div className="flex flex-wrap gap-6 mb-4">
							<div>
								<div className="text-xs text-[#6B7280]">Date & Time</div>
								<div className="font-semibold text-[#18181B]">
									{new Date(meetings[0].date).toLocaleString("en-US", {
										month: "short",
										day: "numeric",
										year: "numeric",
										hour: "numeric",
										minute: "2-digit",
										hour12: true,
									})}
								</div>
							</div>
							<div>
								<div className="text-xs text-[#6B7280]">Location</div>
								<div className="font-semibold text-[#18181B]">
									{meetings[0].location}
								</div>
							</div>
							<div>
								<div className="text-xs text-[#6B7280]">Organizer</div>
								<div className="font-semibold text-[#18181B]">
									{meetings[0].organizer}
								</div>
							</div>
						</div>
						<div className="flex gap-3">
							<button
								className="flex-1 bg-[#24a399] text-white font-semibold rounded-xl py-2"
								onClick={() => alert("Joining meeting...")}
							>
								Join Meeting
							</button>
							<button
								className="flex-1 border border-[#24a399] text-[#24a399] font-semibold rounded-xl py-2"
								onClick={() => setShowAgenda(meetings[0].id)}
							>
								View Agenda
							</button>
						</div>
					</div>
				</Card>
			</div>

			{/* Tabs */}
			<div className="flex gap-2 px-4 mt-6 mb-2">
				<button
					className={`flex-1 py-2 rounded-xl font-semibold text-base ${
						tab === "upcoming"
							? "bg-[#F3E8FF] text-[#24a399]"
							: "bg-white text-[#18181B] border border-[#E6E6E6]"
					}`}
					onClick={() => setTab("upcoming")}
				>
					Upcoming
				</button>
				<button
					className={`flex-1 py-2 rounded-xl font-semibold text-base ${
						tab === "past"
							? "bg-[#F3E8FF] text-[#24a399]"
							: "bg-white text-[#18181B] border border-[#E6E6E6]"
					}`}
					onClick={() => setTab("past")}
				>
					Past Meetings
				</button>
			</div>

			{/* Meeting List */}
			<div className="px-4 flex flex-col gap-4">
				{tab === "upcoming"
					? meetings
							.filter((mtg) => mtg.type === "upcoming")
							.map((mtg) => (
								<Card key={mtg.id} className="rounded-2xl border border-[#E6E6E6] p-4">
									<div className="flex items-center gap-2 mb-2">
										<span className="ml-auto bg-[#F3E8FF] text-[#7C3AED] rounded-xl px-3 py-1 text-xs font-semibold flex items-center gap-1">
											<svg width="14" height="14" fill="none" viewBox="0 0 24 24">
												<circle cx="12" cy="12" r="10" stroke="#7C3AED" strokeWidth="2" />
												<path
													d="M12 6v6l4 2"
													stroke="#7C3AED"
													strokeWidth="2"
													strokeLinecap="round"
												/>
											</svg>
											In {mtg.daysLeft} days
										</span>
									</div>
									<div className="font-bold text-lg text-[#18181B] mb-1">
										{mtg.title}
									</div>
									<div className="text-[#6B7280] mb-2">{mtg.description}</div>
									<div className="flex flex-wrap gap-6 mb-3">
										<div className="flex items-center gap-1 text-[#6B7280] text-sm">
											<svg width="18" height="18" fill="none" viewBox="0 0 24 24">
												<rect
													x="3"
													y="4"
													width="18"
													height="18"
													rx="4"
													stroke="#7C3AED"
													strokeWidth="2"
												/>
												<path d="M16 2v4M8 2v4M3 10h18" stroke="#7C3AED" strokeWidth="2" />
											</svg>
											{new Date(mtg.date).toLocaleDateString("en-US", {
												month: "short",
												day: "numeric",
												year: "numeric",
											})}
										</div>
										<div className="flex items-center gap-1 text-[#6B7280] text-sm">
											<svg width="18" height="18" fill="none" viewBox="0 0 24 24">
												<circle cx="12" cy="12" r="10" stroke="#7C3AED" strokeWidth="2" />
												<path
													d="M12 6v6l4 2"
													stroke="#7C3AED"
													strokeWidth="2"
													strokeLinecap="round"
												/>
											</svg>
											{new Date(mtg.date).toLocaleTimeString("en-US", {
												hour: "2-digit",
												minute: "2-digit",
											})}
										</div>
										<div className="flex items-center gap-1 text-[#6B7280] text-sm">
											<svg width="18" height="18" fill="none" viewBox="0 0 24 24">
												<path
													d="M17.657 16.657A8 8 0 1 0 7.05 7.05a8 8 0 0 0 10.607 9.607Z"
													stroke="#7C3AED"
													strokeWidth="2"
												/>
												<path
													d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
													stroke="#7C3AED"
													strokeWidth="2"
												/>
											</svg>
											{mtg.location}
										</div>
										<div className="flex items-center gap-1 text-[#6B7280] text-sm">
											<svg width="18" height="18" fill="none" viewBox="0 0 24 24">
												<circle cx="12" cy="12" r="10" stroke="#7C3AED" strokeWidth="2" />
												<path
													d="M12 6v6l4 2"
													stroke="#7C3AED"
													strokeWidth="2"
													strokeLinecap="round"
												/>
											</svg>
											{mtg.confirmed}
										</div>
									</div>
									<div className="flex gap-3">
										{mtg.joinLabel && (
											<button
												className="flex-1 border border-[#24a399] text-[#24a399] font-semibold rounded-xl py-2"
												onClick={() => alert("Joining meeting...")}
											>
												{mtg.joinLabel}
											</button>
										)}
										<button
											className="flex-1 border border-[#24a399] text-[#24a399] font-semibold rounded-xl py-2"
											onClick={() => setShowAgenda(mtg.id)}
										>
											{mtg.agendaLabel}
										</button>
										<button className="flex-1 border border-[#E6E6E6] text-[#18181B] font-semibold rounded-xl py-2">
											Details
										</button>
									</div>
								</Card>
							))
					: pastMeetings.map((meeting) => (
							<Card key={meeting.id} className="rounded-2xl border border-[#E6E6E6] p-4">
								<div className="flex items-center justify-between mb-2">
									<span className="font-bold text-lg text-[#18181B]">{meeting.title}</span>
									<span className="bg-[#F3F3F3] text-[#6B7280] rounded-xl px-3 py-1 text-xs font-semibold flex items-center gap-1">
										<svg width="16" height="16" fill="none" viewBox="0 0 24 24">
											<path
												d="M17.657 16.657A8 8 0 1 0 7.05 7.05a8 8 0 0 0 10.607 9.607Z"
												stroke="#24a399"
												strokeWidth="2"
											/>
											<path
												d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
												stroke="#24a399"
												strokeWidth="2"
											/>
										</svg>
										{meeting.attended}
									</span>
								</div>
								<div className="flex items-center gap-2 text-[#6B7280] text-sm mb-3">
									<svg width="18" height="18" fill="none" viewBox="0 0 24 24">
										<rect
											x="3"
											y="4"
											width="18"
											height="18"
											rx="4"
											stroke="#24a399"
											strokeWidth="2"
										/>
										<path d="M16 2v4M8 2v4M3 10h18" stroke="#24a399" strokeWidth="2" />
									</svg>
									{meeting.date}
								</div>
								<div className="bg-[#F8F8FA] rounded-xl p-4 mb-3">
									<div className="font-semibold text-[#18181B] mb-2">Key Decisions</div>
									<ul className="space-y-1">
										{meeting.keyDecisions.map((decision, idx) => (
											<li key={idx} className="flex items-center gap-2 text-[#18181B] text-sm">
												<svg width="18" height="18" fill="none" viewBox="0 0 24 24">
													<circle cx="12" cy="12" r="10" stroke="#24a399" strokeWidth="2" />
													<path
														d="M9 12l2 2 4-4"
														stroke="#24a399"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
												{decision}
											</li>
										))}
									</ul>
								</div>
								<div className="flex gap-2">
									{meeting.actions.map((action, idx) => (
										<button
											key={idx}
											className={`flex-1 border rounded-xl py-2 font-semibold text-sm ${
												action === "Recording"
													? "border-[#24a399] text-[#24a399]"
													: "border-[#E6E6E6] text-[#18181B]"
											} ${action === "Details" ? "border-[#E6E6E6] text-[#18181B]" : ""}`}
										>
											{action}
										</button>
									))}
								</div>
							</Card>
						))}

				{/* Agenda Modal */}
				{showAgenda && (
					<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
						<div className="bg-white rounded-xl w-full max-w-md mx-4 p-6 relative">
							<button
								onClick={() => setShowAgenda(null)}
								className="absolute top-4 right-4 text-gray-400 text-2xl"
							>
								×
							</button>
							<h2 className="text-xl font-bold mb-4 text-[#24a399]">Meeting Agenda</h2>
							<ul className="list-disc pl-6 space-y-2">
								{(meetings.find((m) => m.id === showAgenda)?.agenda.length ?? 0) > 0 ? (
									meetings
										.find((m) => m.id === showAgenda)
										?.agenda.map((item, idx) => (
											<li key={idx} className="text-[#18181B] text-base">
												{item}
											</li>
										))
								) : (
									<li className="text-gray-400">No agenda available yet.</li>
								)}
							</ul>
						</div>
					</div>
				)}

				{/* Top Navigation - desktop only */}
				<div className="hidden md:flex justify-between items-center px-8 py-4 bg-white border-b sticky top-0 z-30">
					<div className="flex items-center gap-8">
						<button
							onClick={() => navigate("/home")}
							className="flex items-center gap-2 text-gray-400 hover:text-[#24a399] font-semibold"
						>
							<HomeIcon className="w-5 h-5" /> Home
						</button>
						<button
							onClick={() => navigate("/members")}
							className="flex items-center gap-2 text-gray-400 hover:text-[#24a399] font-semibold"
						>
							<Users className="w-5 h-5" /> Members
						</button>
						<button
							onClick={() => navigate("/finances")}
							className="flex items-center gap-2 text-gray-400 hover:text-[#24a399] font-semibold"
						>
							<PieChart className="w-5 h-5" /> Finances
						</button>
						<button className="flex items-center gap-2 text-[#24a399] font-semibold">
							<Calendar className="w-5 h-5" /> Meetings
						</button>
					</div>
					<button
						onClick={() => navigate("/profile")}
						className="flex items-center gap-2 text-gray-400 hover:text-[#24a399] font-semibold"
					>
						<UserCircle className="w-5 h-5" /> Account
					</button>
				</div>

				{/* Bottom Navigation - mobile only */}
				<div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 block md:hidden">
					<div className="flex justify-around items-center">
						<button onClick={() => navigate("/home")} className="flex flex-col items-center">
							<HomeIcon className="w-6 h-6 text-gray-400" />
							<span className="text-xs text-gray-400">Home</span>
						</button>
						<button onClick={() => navigate("/members")} className="flex flex-col items-center">
							<Users className="w-6 h-6 text-gray-400" />
							<span className="text-xs text-gray-400">Members</span>
						</button>
						<button onClick={() => navigate("/finances")} className="flex flex-col items-center">
							<PieChart className="w-6 h-6 text-gray-400" />
							<span className="text-xs text-gray-400">Finances</span>
						</button>
						<button className="flex flex-col items-center">
							<Calendar className="w-6 h-6 text-[#24a399]" />
							<span className="text-xs text-[#24a399]">Meetings</span>
						</button>
						<button onClick={() => navigate("/profile")} className="flex flex-col items-center">
							<UserCircle className="w-6 h-6 text-gray-400" />
							<span className="text-xs text-gray-400">Account</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
