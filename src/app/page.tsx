'use client'
import Image from "next/image";
import { api } from "@/services/api";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    api.get("/").then((response) => {
      console.log(response.data);
    });
  }, []);
  
  return (
    <div>
      <h1>Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
