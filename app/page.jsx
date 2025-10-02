import Image from "next/image";
import HeroSection from "@/components/Home/HeroSection";
import Investors from "@/components/Home/Investors";
import GreenBonds from "@/components/Home/GreenBonds";
import HowItWorks from "@/components/Home/HowItWorks";
import InvestGreenBonds from "@/components/Home/InvestGreenBonds";
import PortfolioAllocation from "@/components/Home/PortfolioAllocation";
import GlobalExperise from "@/components/Home/GlobalExperise";
import LearnMore from "@/components/Home/LearnMore";
import Form from "@/components/Home/Form";



export default function Home() {
  return (
    <>
      <HeroSection />
      <Investors />
      <GreenBonds />
      <HowItWorks />
      <InvestGreenBonds />
      <PortfolioAllocation />
      <GlobalExperise />
      <LearnMore />
      <Form />
    </>

  );
}
