"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="ghost" className="m-2 gap-2" onClick={() => router.back()}>
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
};
