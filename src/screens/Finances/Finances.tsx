import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Home as HomeIcon, Users, PieChart, Calendar, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const groupContributions = [
	{ id: 1, name: "Joy Kamau", amount: 1000, date: "2025-04-26", image: "/415829/pexels-photo-415829.jpeg" },
	{ id: 2, name: "Brian Wanjiku", amount: 2000, date: "2025-04-23", image: "/2379004/pexels-photo-2379004.jpeg" },
	{ id: 3, name: "James Mwangi", amount: 1500, date: "2025-04-20", image: "/614810/pexels-photo-614810.jpeg" },
];

const personalFinances = {
	totalContributed: 12000,
	lastContribution: { amount: 1000, date: "2025-04-26" },
	pending: 2000,
	nextDue: "2025-05-10",
};

const groupSummary = {
	totalContributions: 120000,
	availableBalance: 95000,
	thisMonth: 20000,
	membersContributed: 12,
	totalMembers: 20,
};

export const Finances = (): JSX.Element => {
	const navigate = useNavigate();
	const [tab, setTab] = useState<"group" | "personal">("group");

	return (
		<div className="bg-white min-h-screen pb-20">
			{/* Header */}
			<div className="bg-[#24a399] p-4 flex items-center justify-between">
				<span className="text-white font-bold text-lg">Finances</span>
				<button className="text-white" onClick={() => setTab(tab === "group" ? "personal" : "group")}>{tab === "group" ? "Personal" : "Group"} View</button>
			</div>

			{/* Tabs */}
			<div className="flex justify-center gap-4 mt-4">
				<button
					className={`px-4 py-2 rounded ${tab === "group" ? "bg-[#24a399] text-white" : "bg-gray-100 text-gray-700"}`}
					onClick={() => setTab("group")}
				>
					Group Contributions
				</button>
				<button
					className={`px-4 py-2 rounded ${tab === "personal" ? "bg-[#24a399] text-white" : "bg-gray-100 text-gray-700"}`}
					onClick={() => setTab("personal")}
				>
					My Finances
				</button>
			</div>

			{/* Content */}
			{tab === "group" ? (
				<div className="p-4">
					{/* Group Summary */}
					<Card className="p-4 mb-4 rounded-lg border border-[#E6E6E6] shadow-none">
						<div className="flex flex-col gap-2">
							<div className="flex justify-between items-center">
								<span className="text-[#392678] font-semibold">Total Contributions</span>
								<span className="font-bold text-[#24a399] text-lg">KSh {groupSummary.totalContributions.toLocaleString()}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-[#392678] font-semibold">Available Balance</span>
								<span className="font-bold text-[#24a399] text-lg">KSh {groupSummary.availableBalance.toLocaleString()}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-[#392678] font-semibold">This Month</span>
								<span className="font-bold text-[#24a399] text-lg">KSh {groupSummary.thisMonth.toLocaleString()}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-[#392678] font-semibold">Members Contributed</span>
								<span className="font-bold text-[#24a399] text-lg">{groupSummary.membersContributed} / {groupSummary.totalMembers}</span>
							</div>
							<button className="mt-3 w-full py-2 rounded bg-[#24a399] text-white font-semibold" onClick={() => navigate("/contribute-method")}>Add Contribution</button>
						</div>
					</Card>

					{/* Recent Group Contributions */}
					<h2 className="text-lg font-semibold mb-4">History</h2>
					<div className="space-y-3">
						{groupContributions.map((contrib) => (
							<Card key={contrib.id} className="p-4 flex items-center justify-between rounded-lg border border-[#E6E6E6] shadow-none">
								<div className="flex items-center gap-3">
									<img src={contrib.image || "/contributions (1).png"} alt="Avatar" className="w-10 h-10 rounded-full object-cover bg-gray-100" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = "/contributions (1).png"; }} />
									<div>
										<p className="font-semibold text-[#392678]">{contrib.name}</p>
										<p className="text-xs text-gray-400">{new Date(contrib.date).toLocaleDateString()}</p>
									</div>
								</div>
								<span className="font-bold text-[#24a399] text-lg">KSh {contrib.amount.toLocaleString()}</span>
							</Card>
						))}
					</div>
				</div>
			) : (
				<div className="p-4">
					<h2 className="text-lg font-semibold mb-4">My Finances</h2>
					<Card className="p-4 mb-4 rounded-lg border border-[#E6E6E6] shadow-none">
						<div className="flex justify-between mb-2">
							<span className="text-[#392678]">Total Contributed</span>
							<span className="font-bold text-[#24a399]">KSh {personalFinances.totalContributed.toLocaleString()}</span>
						</div>
						<div className="flex justify-between mb-2">
							<span className="text-[#392678]">Last Contribution</span>
							<span>KSh {personalFinances.lastContribution.amount} on {new Date(personalFinances.lastContribution.date).toLocaleDateString()}</span>
						</div>
						<div className="flex justify-between mb-2">
							<span className="text-[#392678]">Pending</span>
							<span className="text-red-500">KSh {personalFinances.pending.toLocaleString()}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-[#392678]">Next Due</span>
							<span>{new Date(personalFinances.nextDue).toLocaleDateString()}</span>
						</div>
					</Card>
				</div>
			)}

			{/* Bottom Navigation */}
			<div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 block md:hidden">
				<div className="flex justify-around items-center">
					<button onClick={() => navigate("/home")} className={`flex flex-col items-center`}>
						<HomeIcon className="w-6 h-6 text-gray-400" />
						<span className="text-xs text-gray-400">Home</span>
					</button>
					<button onClick={() => navigate("/members")} className={`flex flex-col items-center`}>
						<Users className="w-6 h-6 text-gray-400" />
						<span className="text-xs text-gray-400">Members</span>
					</button>
					<button onClick={() => navigate("/finances")} className={`flex flex-col items-center`}>
						<PieChart className="w-6 h-6 text-[#24a399]" />
						<span className="text-xs text-[#24a399]">Finances</span>
					</button>
					<button onClick={() => navigate("/meetings")} className={`flex flex-col items-center`}>
						<Calendar className="w-6 h-6 text-gray-400" />
						<span className="text-xs text-gray-400">Meetings</span>
					</button>
					<button onClick={() => navigate("/profile")} className={`flex flex-col items-center`}>
						<UserCircle className="w-6 h-6 text-gray-400" />
						<span className="text-xs text-gray-400">Account</span>
					</button>
				</div>
			</div>
		</div>
	);
};
