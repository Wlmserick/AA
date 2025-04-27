import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Calendar, Users, Home as HomeIcon, PieChart, FileText, UserCircle, Edit3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const [showChamaDropdown, setShowChamaDropdown] = useState(false);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#24a399] p-4 flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-white font-bold text-lg">AA CHAMA</span>
        </div>
        <button 
          className="text-white"
          onClick={() => setShowChamaDropdown(!showChamaDropdown)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Chama Dropdown */}
        {showChamaDropdown && (
          <div className="absolute top-full right-4 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
            <div className="p-2">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Add/Join Chama
              </button>
              <div className="border-t my-1"></div>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Switch to Investment Club
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Verification Notice */}
      <div className="bg-[#2D2D2D] m-4 p-4 rounded-lg flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <span className="text-2xl">!</span>
          <p className="text-sm">Reminder, you need to verify your identity in order to cashout</p>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Apply for Loan</span>
            </div>
            <p className="text-sm text-gray-500">Up to KSh 50,000</p>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Record Expense</span>
              <Edit3 className="w-5 h-5 text-[#24a399]" />
            </div>
            <p className="text-sm text-gray-500">Add new transaction</p>
          </div>
        </div>

        {/* Contribution Notice */}
        <div className="bg-gray-50 rounded-lg p-4 mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="text-[#24a399] w-6 h-6" />
            <p className="text-sm">You haven't contributed for April</p>
          </div>
          <Button className="bg-[#24a399] text-white text-sm px-4 py-2 rounded-md">
            Contribute Now
          </Button>
        </div>
      </div>

      {/* Chama Overview */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Chama Overview</h2>
        
        {/* Group Health */}
        <Card className="p-4 mb-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="text-[#24a399] w-6 h-6" />
              <div>
                <p className="font-medium">Group Health</p>
                <p className="text-sm text-gray-500">80% contributed this month</p>
              </div>
            </div>
            <span className="text-[#24a399] font-medium">Good</span>
          </div>
        </Card>

        {/* Next Meeting */}
        <Card className="p-4 bg-gray-50">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="text-[#24a399] w-6 h-6" />
            <div>
              <p className="font-medium">Next Meeting: Apr 26</p>
              <p className="text-sm text-gray-500">5:00PM · Online</p>
            </div>
          </div>
          <Button className="w-full bg-[#24a399] text-white py-2 rounded-md">
            View Agenda
          </Button>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt="Joy"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">Joy contributed KSh 1,000</p>
              <p className="text-sm text-gray-500">1d ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <FileText className="w-4 h-4 text-gray-600" />
            </div>
            <div>
              <p className="font-medium">Voting for a new investment</p>
              <p className="text-sm text-gray-500">Apr 23, 2025 · 6 votes so far</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Brian"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">Brian contributed KSh 2,000</p>
              <p className="text-sm text-gray-500">4d ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center">
            <HomeIcon className="w-6 h-6 text-[#24a399]" />
            <span className="text-xs text-[#24a399]">Home</span>
          </button>
          <button onClick={() => navigate("/members")} className="flex flex-col items-center">
            <Users className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Members</span>
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