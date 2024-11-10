// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (!isClient) setIsClient(true);
  }, []);
  if (!isClient) return <>{children}</>;
  return <NextUIProvider>{children}</NextUIProvider>;
}
