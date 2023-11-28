import styles from "./page.module.css";
import Hero from "@/app/ui/hero/hero";
import Services from "@/app/ui/services/services";
import Contact from "@/app/ui/contact/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}
