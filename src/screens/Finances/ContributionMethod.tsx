import { Card } from "../../components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";

export const ContributionMethod = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 flex flex-col gap-6 items-center">
        <h2 className="text-xl font-bold mb-2 text-[#392678]">Select Contribution Method</h2>
        <button
          className="w-full py-3 rounded bg-[#24a399] text-white font-semibold text-lg"
          onClick={() => alert('Bank contribution flow')}
        >
          Bank
        </button>
        <button
          className="w-full py-3 rounded bg-[#24a399] text-white font-semibold text-lg"
          onClick={() => alert('Mobile money contribution flow')}
        >
          Mobile Money
        </button>
        <button
          className="w-full py-2 rounded bg-gray-200 text-gray-700 mt-2"
          onClick={() => {
            if (location.state && location.state.fromHome) {
              navigate("/home");
            } else {
              navigate("/finances");
            }
          }}
        >
          Cancel
        </button>
      </Card>
    </div>
  );
}
