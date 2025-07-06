import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Payouts from "@/components/Payouts";
import Plans from "@/components/Plans";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Plans />
      <Payouts />
      <Footer />
    </main>
  );
}
