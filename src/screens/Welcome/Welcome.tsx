import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export const Welcome = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-[392px] min-h-[500px] md:h-[852px] relative border-none shadow-none">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full px-4 flex flex-col items-center gap-6">
            <img
              className="w-full max-w-[361px] aspect-square object-cover"
              alt="Chatgpt image"
              src="/chatgpt-image-apr-26--2025--11-56-07-pm-1.png"
            />

            <div className="w-full flex flex-col gap-4">
              <Button 
                className="w-full h-14 bg-[#24a399] hover:bg-[#1e8a82] rounded-md font-['Lunasima',Helvetica] font-bold text-white text-xl tracking-[0.27px] leading-[22.2px]"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              <Button
                variant="outline"
                className="w-full h-14 border-[0.5px] border-[#24a399] rounded-md font-['Lunasima',Helvetica] font-bold text-[#1eb9a2] text-xl tracking-[0.27px] leading-[22.2px] hover:bg-[#f0faf9]"
                onClick={() => navigate("/register")}
              >
                Get Started
              </Button>

              <p className="w-full text-sm text-center tracking-[0.27px] leading-[15.5px] mt-2">
                <span className="text-[#392678] tracking-[0.04px]">
                  By selecting one or the other, you are agreeing to the{" "}
                </span>
                <span className="font-bold text-[#24a399] tracking-[0.04px] underline cursor-pointer">
                  Terms of Service
                </span>
                <span className="text-[#392678] tracking-[0.04px]"> &amp;</span>
                <span className="text-[#24a399] tracking-[0.04px]">&nbsp;</span>
                <span className="font-bold text-[#24a399] tracking-[0.04px] underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};