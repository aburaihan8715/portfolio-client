import Spinner from '@/components/common/spinner';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex h-screen items-center justify-center bg-black/10 backdrop-blur-md">
      <Spinner />
    </div>
  );
}
