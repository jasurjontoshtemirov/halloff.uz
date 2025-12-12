"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { setupDeviceHeaders, startDeviceMonitoring } from "@/lib/device-manager";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Device headers'ni sozlash
    setupDeviceHeaders();
    
    // Device monitoring'ni boshlash
    startDeviceMonitoring();
  }, []);

  return <SessionProvider>{children}</SessionProvider>;
}
