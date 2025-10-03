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
import PoweredAncestro from "@/components/Home/PoweredAncestro";

export default function Home() {

  const PageData = {
    heroSection: {
      title: "Financing the Latin American Energy Transition.",
      subTitle: "Capital solutions designed for renewable energy, EV, and sustainable infrastructure projects.",
      secondTitle: "Introducing Ancestro Green Bonds",
      secondSubTitle: `This is your chance to invest directly in the energy transition of a
          continent while securing strong, reliable returns. <br />
          This is more than ROI. It’s about protecting the climate, building
          infrastructure, and transforming lives — one project at a time.`
    }
  }

  const {heroSection} = PageData;

  return (
    <>
      <HeroSection heroSection={heroSection}/>
      {/* <Investors /> */}
      <GreenBonds />
      <HowItWorks />
      <InvestGreenBonds />
      <PortfolioAllocation />
      <GlobalExperise />
      <LearnMore />
      <Form />
      <PoweredAncestro />
    </>
  );
}
