import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Services from "../components/Services";
import SelectedWork from "../components/SelectedWork";
import Industries from "../components/Industries";
import Process from "../components/Process";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Welcome />

      <Services />
      <SelectedWork />
      <Industries />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}