import { FaUserSecret } from "react-icons/fa";

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-primary">
        <FaUserSecret className="text-2xl text-green-700" />
      </p>
      <p className="bg-gradient-to-r from-green-700 via-yellow-600 to-green-500 bg-clip-text text-2xl font-semibold text-gray-700 text-transparent">
        Raihan
      </p>
    </div>
  );
};

export default BrandLogo;
