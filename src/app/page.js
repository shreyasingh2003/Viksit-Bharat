import BadaltaBharat from "@/components/BadaltaBharat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pledge from "@/components/Pledge";
import Schemes from "@/components/Schemes";
import StudentCreation from "@/components/StudentCreation";
import Glimpse from "@/components/glimpse";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4">
      <Header />
      <Glimpse />
      <BadaltaBharat />
      <StudentCreation />
      <Pledge/>
      <Schemes/>
      <Footer/>
    </div>
  );
}
