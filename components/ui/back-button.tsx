"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./button";

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="ghost" className="m-2" onClick={() => router.back()}>
      Back
    </Button>
  );
};
