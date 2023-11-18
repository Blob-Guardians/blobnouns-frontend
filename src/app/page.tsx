import HomePage from "@/features/HomePage/homePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blobtoss",
};

export default function Home() {
  return <HomePage />;
}
