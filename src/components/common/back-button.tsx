'use client';

import { useRouter } from 'next/navigation';
import { FaHandPointLeft } from 'react-icons/fa';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-2xl text-gray-300"
    >
      <FaHandPointLeft /> Back
    </button>
  );
};

export default BackButton;
