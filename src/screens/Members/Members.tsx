import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { UserX, UserMinus, Vote, Calendar, Users, Home as HomeIcon, PieChart, UserCircle } from "lucide-react";

type MemberStatus = "all" | "positions" | "active" | "inactive" | "new";
type MemberRole = "Chairperson" | "Secretary" | "Treasurer" | "Member" | "Inactive" | "Pending invite";

interface Member {
  id: string;
  name: string;
  role: MemberRole;
  image: string;
  joinDate: string;
  status: "active" | "inactive" | "pending";
  contributions: number;
  meetingsAttended: number;
  totalMeetings: number;
}

const members: Member[] = [
  {
    id: "1",
    name: "James Mwangi",
    role: "Chairperson",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    joinDate: "2023-01-15",
    status: "active",
    contributions: 25000,
    meetingsAttended: 12,
    totalMeetings: 12
  },
  {
    id: "2",
    name: "Joy Kamau",
    role: "Secretary",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    joinDate: "2023-02-01",
    status: "active",
    contributions: 20000,
    meetingsAttended: 11,
    totalMeetings: 12
  },
  {
    id: "3",
    name: "Anne Njeri",
    role: "Treasurer",
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
    joinDate: "2023-02-15",
    status: "active",
    contributions: 22000,
    meetingsAttended: 12,
    totalMeetings: 12
  },
  {
    id: "4",
    name: "David Otieno",
    role: "Inactive",
    image: "",
    joinDate: "2023-03-01",
    status: "inactive",
    contributions: 5000,
    meetingsAttended: 2,
    totalMeetings: 12
  },
  {
    id: "5",
    name: "Susan Auma",
    role: "Member",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    joinDate: "2023-03-15",
    status: "active",
    contributions: 18000,
    meetingsAttended: 10,
    totalMeetings: 12
  },
  {
    id: "6",
    name: "Brian Wanjiku",
    role: "Member",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    joinDate: "2023-04-01",
    status: "active",
    contributions: 15000,
    meetingsAttended: 9,
    totalMeetings: 12
  },
  {
    id: "7",
    name: "Mary Wanjiru",
    role: "Pending invite",
    image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg",
    joinDate: "2023-04-15",
    status: "pending",
    contributions: 0,
    meetingsAttended: 0,
    totalMeetings: 0
  },
  {
    id: "8",
    name: "John Kariuki",
    role: "Member",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    joinDate: "2023-05-01",
    status: "active",
    contributions: 12000,
    meetingsAttended: 8,
    totalMeetings: 12
  }
];

const filterOptions: { label: string; value: MemberStatus }[] = [
  { label: "All", value: "all" },
  { label: "Positions", value: "positions" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "New", value: "new" },
];

export const Members = (): JSX.Element => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<MemberStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showVoteOptions, setShowVoteOptions] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);
  const [newMember, setNewMember] = useState<Partial<Member>>({
    name: "",
    role: "Member",
    image: "",
    joinDate: new Date().toISOString().slice(0, 10),
    status: "active",
    contributions: 0,
    meetingsAttended: 0,
    totalMeetings: 0,
  });
  const [membersList, setMembersList] = useState<Member[]>(members);
  const [voteSuccess, setVoteSuccess] = useState(false);

  const filteredMembers = membersList.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase());
    switch (filter) {
      case "positions":
        return matchesSearch && ["Chairperson", "Secretary", "Treasurer"].includes(member.role);
      case "active":
        return matchesSearch && member.status === "active";
      case "inactive":
        return matchesSearch && member.status === "inactive";
      case "new":
        return matchesSearch && member.status === "pending";
      default:
        return matchesSearch;
    }
  });

  const getRoleColor = (role: MemberRole) => {
    switch (role) {
      case "Chairperson":
      case "Secretary":
      case "Treasurer":
        return "text-[#FFB800]";
      case "Inactive":
        return "text-gray-400";
      case "Pending invite":
        return "text-[#24a399]";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#24a399] p-4 flex items-center justify-between">
        <button onClick={() => navigate("/home")} className="text-white">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="text-white font-bold text-lg">Members</span>
        <button className="text-white" onClick={() => setShowAddMember(true)}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-2 px-4 py-3">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="flex-1 h-10 rounded-md bg-gray-100 px-3 text-sm placeholder:text-gray-400 border-none focus:outline-none"
        />
        <div className="relative">
          <button
            onClick={() => setShowFilterDropdown(v => !v)}
            className="h-10 px-4 rounded-md bg-gray-200 text-gray-700 flex items-center gap-2 text-sm"
          >
            {filterOptions.find(f => f.value === filter)?.label || "All"}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {showFilterDropdown && (
            <div className="absolute right-0 mt-1 w-32 bg-white border rounded shadow z-10">
              {filterOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => { setFilter(opt.value); setShowFilterDropdown(false); }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${filter === opt.value ? "font-bold text-[#24a399]" : "text-gray-700"}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Members List */}
      <div className="px-4">
        {filteredMembers.map(member => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="flex items-center gap-3 py-3 cursor-pointer border-b border-gray-100"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xl">{member.name[0]}</span>
              </div>
            )}
            <div>
              <p className="font-medium leading-tight">{member.name}</p>
              <p className={`text-sm leading-tight ${getRoleColor(member.role)}`}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md mx-4 p-6 relative">
            <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 text-gray-400 text-2xl">×</button>
            <div className="flex items-center gap-4 mb-4">
              {selectedMember.image ? (
                <img src={selectedMember.image} alt={selectedMember.name} className="w-16 h-16 rounded-full object-cover" />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-2xl">{selectedMember.name[0]}</span>
                </div>
              )}
              <div>
                <h2 className="text-xl font-bold">{selectedMember.name}</h2>
                <p className={`text-sm ${getRoleColor(selectedMember.role)}`}>{selectedMember.role}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Join Date</span>
                <span>{new Date(selectedMember.joinDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Status</span>
                <span className="capitalize">{selectedMember.status}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Contributions</span>
                <span>KSh {selectedMember.contributions.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Meetings Joined</span>
                <span>{selectedMember.meetingsAttended}/{selectedMember.totalMeetings}</span>
              </div>
            </div>
            {/* Voting Options */}
            <div className="space-y-2 pt-2">
              {selectedMember.role === "Member" && (
                <button
                  onClick={() => setShowVoteOptions(true)}
                  className="w-full py-2 rounded bg-[#24a399] text-white font-semibold"
                >Vote for Position</button>
              )}
              {["Chairperson", "Secretary", "Treasurer"].includes(selectedMember.role) && (
                <button
                  onClick={() => setShowVoteOptions(true)}
                  className="w-full py-2 rounded bg-orange-500 text-white font-semibold"
                >Vote to Demote</button>
              )}
              <button
                onClick={() => setShowVoteOptions(true)}
                className="w-full py-2 rounded bg-red-500 text-white font-semibold"
              >Vote to Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* Vote Options Modal */}
      {showVoteOptions && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Start a Vote</h3>
            <div className="space-y-3">
              {selectedMember.role === "Member" && (
                <Button
                  onClick={() => setShowVoteOptions(false)}
                  className="w-full bg-[#24a399] hover:bg-[#1e8a82] text-white flex items-center justify-center gap-2"
                >
                  <Vote className="w-4 h-4" />
                  Vote for Position
                </Button>
              )}
              {["Chairperson", "Secretary", "Treasurer"].includes(selectedMember.role) && (
                <Button
                  onClick={() => { setShowVoteOptions(false); setVoteSuccess(true); }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2"
                >
                  <UserMinus className="w-4 h-4" />
                  Vote to Demote
                </Button>
              )}
              <Button
                onClick={() => { setShowVoteOptions(false); setVoteSuccess(true); }}
                className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2"
              >
                <UserX className="w-4 h-4" />
                Vote to Remove
              </Button>
              <Button
                onClick={() => setShowVoteOptions(false)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700"
              >
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Vote Success Modal */}
      {voteSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-xs mx-4 p-6 flex flex-col items-center">
            <svg className="mb-2" width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#E6F4F1"/><path d="M8 12l2.5 2.5L16 9" stroke="#24a399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h2 className="text-xl font-bold mb-2 text-[#24a399] text-center">Your vote has been cast!</h2>
            <button className="mt-4 w-full py-2 rounded bg-[#24a399] text-white font-semibold" onClick={() => setVoteSuccess(false)}>OK</button>
          </div>
        </div>
      )}

      {/* Add Member Modal */}
      {showAddMember && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md mx-4 p-6 relative">
            <button onClick={() => setShowAddMember(false)} className="absolute top-4 right-4 text-gray-400 text-2xl">×</button>
            <h2 className="text-xl font-bold mb-4">Add New Member</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                setMembersList([
                  ...membersList,
                  {
                    id: (membersList.length + 1).toString(),
                    name: newMember.name || "New Member",
                    role: (newMember.role as MemberRole) || "Member",
                    image: newMember.image || "",
                    joinDate: newMember.joinDate || new Date().toISOString().slice(0, 10),
                    status: (newMember.status as "active" | "inactive" | "pending") || "active",
                    contributions: Number(newMember.contributions) || 0,
                    meetingsAttended: Number(newMember.meetingsAttended) || 0,
                    totalMeetings: Number(newMember.totalMeetings) || 0,
                  },
                ]);
                setShowAddMember(false);
                setNewMember({
                  name: "",
                  role: "Member",
                  image: "",
                  joinDate: new Date().toISOString().slice(0, 10),
                  status: "active",
                  contributions: 0,
                  meetingsAttended: 0,
                  totalMeetings: 0,
                });
              }}
              className="space-y-3"
            >
              <input
                type="text"
                placeholder="Full Name"
                value={newMember.name}
                onChange={e => setNewMember({ ...newMember, name: e.target.value })}
                className="w-full border rounded px-3 py-2 text-sm"
                required
              />
              <select
                value={newMember.role}
                onChange={e => setNewMember({ ...newMember, role: e.target.value as MemberRole })}
                className="w-full border rounded px-3 py-2 text-sm"
              >
                <option value="Member">Member</option>
                <option value="Chairperson">Chairperson</option>
                <option value="Secretary">Secretary</option>
                <option value="Treasurer">Treasurer</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending invite">Pending invite</option>
              </select>
              <input
                type="date"
                value={newMember.joinDate}
                onChange={e => setNewMember({ ...newMember, joinDate: e.target.value })}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <select
                value={newMember.status}
                onChange={e => setNewMember({ ...newMember, status: e.target.value as "active" | "inactive" | "pending" })}
                className="w-full border rounded px-3 py-2 text-sm"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
              <input
                type="number"
                placeholder="Contributions"
                value={newMember.contributions}
                onChange={e => setNewMember({ ...newMember, contributions: Number(e.target.value) })}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <input
                type="number"
                placeholder="Meetings Attended"
                value={newMember.meetingsAttended}
                onChange={e => setNewMember({ ...newMember, meetingsAttended: Number(e.target.value) })}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <input
                type="number"
                placeholder="Total Meetings"
                value={newMember.totalMeetings}
                onChange={e => setNewMember({ ...newMember, totalMeetings: Number(e.target.value) })}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <input
                type="url"
                placeholder="Image URL (optional)"
                value={newMember.image}
                onChange={e => setNewMember({ ...newMember, image: e.target.value })}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <button type="submit" className="w-full py-2 rounded bg-[#24a399] text-white font-semibold mt-2">Add Member</button>
            </form>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2">
        <div className="flex justify-around items-center">
          <button onClick={() => navigate("/home")} className="flex flex-col items-center">
            <HomeIcon className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <Users className="w-6 h-6 text-[#24a399]" />
            <span className="text-xs text-[#24a399]">Members</span>
          </button>
          <button onClick={() => navigate("/finances")} className="flex flex-col items-center">
            <PieChart className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Finances</span>
          </button>
          <button onClick={() => navigate("/meetings")} className="flex flex-col items-center">
            <Calendar className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Meetings</span>
          </button>
          <button onClick={() => navigate("/profile")} className="flex flex-col items-center">
            <UserCircle className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};