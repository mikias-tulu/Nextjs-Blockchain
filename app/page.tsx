'use client'

import { useEffect, useState } from "react";
import Header from "../components/header";
import HeroSection from "../components/HeroSection";
import AssetContent from "../components/AssetContent";
import { Asset } from "./lib/types";

export default function Home() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/assets");
      if (res.ok) {
        const data = await res.json();
        setAssets(data.assets);
      } else {
        throw new Error("Failed to fetch assets");
      }
    } catch (error) {
      console.error("Failed to fetch assets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-4 bg-[#000] bg-contain bg-no-repeat bg-top gap-8" style={{ backgroundImage: 'url("/BG.png")' }}>
      <Header />
      <HeroSection />
      <AssetContent assets={assets} />
    </main>
  );
}

