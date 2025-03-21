import styles from "./page.module.css";
import Hero from "@/app/ui/hero/hero";
import Services from "@/app/ui/services/services";
import Contact from "@/app/ui/contact/contact";
import About from "@/app/ui/about/about";
import BottomSwiper from "@/app/ui/BottomSwiper/BottomSwiper";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
      <About />
      <BottomSwiper />
    </>
  );
}
