import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { CheckCircle, UploadCloud, User, LogOut, ShieldCheck, Edit3, Calendar, Users, Home as HomeIcon, PieChart, UserCircle } from "lucide-react";

const user = {
  name: "Jane Doe",
  email: "jane.doe@email.com",
  phone: "+254 712 345678",
  avatar: "/Members.png",
  verified: false,
  joined: "2023-01-15",
  role: "Member",
  contributions: 18500,
  meetingsAttended: 14,
  totalMeetings: 16,
};

export const Profile = (): JSX.Element => {
  const [verified, setVerified] = useState(user.verified);
  const [showUpload, setShowUpload] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="bg-[#F6FAF9] min-h-screen pb-20">
      <div className="flex flex-col items-center pt-8 pb-4">
        <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover border-4 border-[#24a399]" />
        <h2 className="mt-4 text-2xl font-bold text-[#18181B] flex items-center gap-2">
          {user.name}
          {verified && <ShieldCheck className="w-6 h-6 text-[#24a399]" />}
        </h2>
        <p className="text-[#6B7280]">{user.email}</p>
        <p className="text-[#6B7280]">{user.phone}</p>
        <span className="mt-2 px-3 py-1 bg-[#E6F4F1] text-[#24a399] rounded-full text-xs font-semibold">{user.role}</span>
      </div>

      <div className="px-4 flex flex-col gap-4">
        <Card className="rounded-2xl border border-[#E6E6E6] p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#18181B]">Joined</span>
            <span className="text-[#6B7280]">{new Date(user.joined).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#18181B]">Contributions</span>
            <span className="text-[#24a399] font-bold">KSh {user.contributions.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#18181B]">Meetings Attended</span>
            <span className="text-[#18181B]">{user.meetingsAttended}/{user.totalMeetings}</span>
          </div>
        </Card>

        <Card className="rounded-2xl border border-[#E6E6E6] p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-[#24a399]" />
            <span className="font-semibold text-[#18181B]">Identity Verification</span>
            {verified && <span className="ml-auto flex items-center gap-1 text-xs text-[#24a399] font-semibold"><CheckCircle className="w-4 h-4" /> Verified</span>}
          </div>
          {!verified && (
            <>
              <p className="text-[#6B7280] text-sm">To access all features, please verify your identity using a legal document.</p>
              <div className="flex gap-2">
                <button onClick={() => { setShowUpload(true); setSelectedDoc('ID Card'); }} className="flex-1 border border-[#24a399] text-[#24a399] rounded-xl py-2 font-semibold flex items-center justify-center gap-2"><UploadCloud className="w-4 h-4" />Upload ID Card</button>
                <button onClick={() => { setShowUpload(true); setSelectedDoc('Passport'); }} className="flex-1 border border-[#24a399] text-[#24a399] rounded-xl py-2 font-semibold flex items-center justify-center gap-2"><UploadCloud className="w-4 h-4" />Upload Passport</button>
              </div>
            </>
          )}
        </Card>

        <Card className="rounded-2xl border border-[#E6E6E6] p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-5 h-5 text-[#24a399]" />
            <span className="font-semibold text-[#18181B]">Profile Settings</span>
          </div>
          <button className="flex items-center gap-2 text-[#24a399] font-semibold py-2"><Edit3 className="w-4 h-4" />Edit Profile</button>
          <button className="flex items-center gap-2 text-[#24a399] font-semibold py-2"><LogOut className="w-4 h-4" />Log Out</button>
        </Card>
      </div>

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md mx-4 p-6 relative">
            <button onClick={() => setShowUpload(false)} className="absolute top-4 right-4 text-gray-400 text-2xl">×</button>
            <h2 className="text-xl font-bold mb-4 text-[#24a399]">Upload {selectedDoc}</h2>
            <input type="file" accept="image/*,application/pdf" className="mb-4" />
            <button className="w-full py-2 rounded bg-[#24a399] text-white font-semibold" onClick={() => { setShowUpload(false); setVerified(true); }}>Submit for Verification</button>
          </div>
        </div>
      )}

      {/* Bottom Navigation - mobile only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 block md:hidden">
        <div className="flex justify-around items-center">
          <button onClick={() => navigate('/home')} className="flex flex-col items-center">
            <HomeIcon className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Home</span>
          </button>
          <button onClick={() => navigate('/members')} className="flex flex-col items-center">
            <Users className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Members</span>
          </button>
          <button onClick={() => navigate('/finances')} className="flex flex-col items-center">
            <PieChart className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Finances</span>
          </button>
          <button onClick={() => navigate('/meetings')} className="flex flex-col items-center">
            <Calendar className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Meetings</span>
          </button>
          <button onClick={() => navigate('/profile')} className="flex flex-col items-center">
            <UserCircle className="w-6 h-6 text-[#24a399]" />
            <span className="text-xs text-[#24a399]">Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
