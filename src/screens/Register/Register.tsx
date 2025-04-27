import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Lock, Phone, Mail } from "lucide-react";

export const Register = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-[392px] relative border-none shadow-none">
        <div className="flex flex-col items-start justify-start w-full p-4">
          <button
            onClick={() => navigate("/")}
            className="text-black mb-6"
          >
            ×
          </button>

          <h1 className="text-[28px] font-bold text-center w-full mb-8">Create an account</h1>

          <div className="w-full flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="First name"
                className="w-full h-14 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#24a399] text-base placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Last name"
                className="w-full h-14 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#24a399] text-base placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-14 pl-4 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:border-[#24a399] text-base placeholder:text-gray-400"
              />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="relative">
              <input
                type="tel"
                placeholder="Mobile number"
                className="w-full h-14 pl-4 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:border-[#24a399] text-base placeholder:text-gray-400"
              />
              <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-14 pl-4 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:border-[#24a399] text-base placeholder:text-gray-400"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <Button 
              onClick={() => navigate("/home")}
              className="w-full h-14 bg-[#24a399] hover:bg-[#1e8a82] rounded-xl font-bold text-white text-lg mt-4"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};