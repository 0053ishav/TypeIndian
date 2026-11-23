"use client";

import { Toaster } from "sonner";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function ThemeAwareToaster() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      position="bottom-center"
      theme={resolvedTheme}
      richColors
      closeButton
      duration={2500}
    />
  );
}
