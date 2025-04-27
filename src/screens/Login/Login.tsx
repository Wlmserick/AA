import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Eye, EyeOff } from "lucide-react";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-[392px] relative border-none shadow-none">
        <div className="flex flex-col items-start justify-start w-full p-4">
          <h1 className="text-[28px] font-bold mb-2">Welcome back!</h1>
          <p className="text-gray-600 mb-8">Sign in to continue.</p>

          <div className="w-full flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-14 px-4 rounded-xl bg-[#F6F6F6] border-none focus:outline-none focus:ring-2 focus:ring-[#24a399] text-base placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-14 px-4 pr-12 rounded-xl bg-[#F6F6F6] border-none focus:outline-none focus:ring-2 focus:ring-[#24a399] text-base placeholder:text-gray-400"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="flex justify-end">
              <button className="text-[#0066FF] text-sm">Forgot Password?</button>
            </div>

            <Button 
              onClick={() => navigate("/home")}
              className="w-full h-14 bg-[#24a399] hover:bg-[#1e8a82] rounded-xl font-bold text-white text-lg"
            >
              Continue
            </Button>

            <div className="flex items-center gap-3 my-4">
              <div className="h-[1px] flex-1 bg-gray-200"></div>
              <span className="text-gray-500 text-sm">OR</span>
              <div className="h-[1px] flex-1 bg-gray-200"></div>
            </div>

            <button className="w-full h-14 rounded-xl border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-50">
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google" 
                className="w-5 h-5 object-contain" 
              />
              <span className="text-gray-600">Login with Google</span>
            </button>

            <button className="w-full h-14 rounded-xl border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-50">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                alt="Apple" 
                className="w-5 h-5 object-contain" 
              />
              <span className="text-gray-600">Login with Apple</span>
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              Have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-[#24a399] font-semibold"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};