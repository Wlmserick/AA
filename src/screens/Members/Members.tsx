import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ChevronLeft, Plus, Search, ChevronDown, MoreVertical, UserX, UserMinus, Vote } from "lucide-react";

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

export const Members = (): JSX.Element => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<MemberStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showVoteOptions, setShowVoteOptions] = useState(false);

  const filteredMembers = members.filter(member => {
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
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/home")} className="text-white">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-white font-bold text-lg">Members</span>
        </div>
        <button className="text-white">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Search and Filter */}
      <div className="p-4 flex gap-3">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-10 pr-4 rounded-xl bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-[#24a399]"
          />
        </div>
        <button
          onClick={() => setFilter(filter === "all" ? "positions" : "all")}
          className="h-12 px-4 rounded-xl bg-gray-100 flex items-center gap-2"
        >
          <span className="text-gray-600">{filter === "all" ? "All" : filter}</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Members List */}
      <div className="p-4 space-y-4">
        {filteredMembers.map(member => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-3">
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
                <p className="font-medium">{member.name}</p>
                <p className={`text-sm ${getRoleColor(member.role)}`}>{member.role}</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowVoteOptions(true);
                setSelectedMember(member);
              }}
            >
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        ))}
      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white p-6 rounded-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                {selectedMember.image ? (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
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
              <button onClick={() => setSelectedMember(null)} className="text-gray-400">
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Join Date</p>
                <p className="font-medium">{new Date(selectedMember.joinDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium capitalize">{selectedMember.status}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Contributions</p>
                <p className="font-medium">KSh {selectedMember.contributions.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Meeting Attendance</p>
                <p className="font-medium">
                  {selectedMember.meetingsAttended}/{selectedMember.totalMeetings} meetings
                </p>
              </div>

              {selectedMember.status === "active" && (
                <div className="pt-4 border-t">
                  <Button
                    onClick={() => setShowVoteOptions(true)}
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                  >
                    <Vote className="w-4 h-4 mr-2" />
                    Start Vote
                  </Button>
                </div>
              )}
            </div>
          </Card>
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
                  onClick={() => setShowVoteOptions(false)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2"
                >
                  <UserMinus className="w-4 h-4" />
                  Vote to Demote
                </Button>
              )}
              <Button
                onClick={() => setShowVoteOptions(false)}
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
          <button className="flex flex-col items-center">
            <PieChart className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Finances</span>
          </button>
          <button className="flex flex-col items-center">
            <Calendar className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Meetings</span>
          </button>
          <button className="flex flex-col items-center">
            <UserCircle className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};