"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn, getCurrentUser } from "@/lib/auth";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    if (!isLoggedIn()) {
      router.push("/auth/login");
    }  else {
      setIsChecking(false);
    }
  }, [router]);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
