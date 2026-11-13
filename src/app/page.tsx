import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowBookingWorks } from "@/components/HowBookingWorks";
import { TherapistCta } from "@/components/TherapistCta";
import { WhatToExpect } from "@/components/WhatToExpect";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowBookingWorks />
        <WhatToExpect />
        <TherapistCta />
      </main>
      <Footer />
    </>
  );
}
