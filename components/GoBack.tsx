"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <MoveLeft />
    </button>
  );
};

export default GoBack;
