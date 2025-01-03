import { FaUserSecret } from "react-icons/fa";

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <FaUserSecret className="text-xl text-gray-400" />

      <p className="bg-gradient-to-r from-cyan-300 to-gray-500 bg-clip-text text-2xl font-semibold text-gray-700 text-transparent">Raihan</p>
    </div>
  );
};

export default BrandLogo;
