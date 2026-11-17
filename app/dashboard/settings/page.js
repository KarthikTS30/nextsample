"use client";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <button className="text-blue-600 hover:text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-md mb-4" onClick={handleBack}>
              Back
            </button>
            <h1>Settings Page</h1>
      </main>
    </div>
  );
}