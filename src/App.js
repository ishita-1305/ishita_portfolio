import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Counter from "./components/Counter";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import CodingProfiles from "./components/Coding";

function App() {
  return (
    <div class="main-content">
      <Navbar />
      <Landing />
      <main>
        <About />
        <Skills />
        <Counter />
        <Experience />
        <Projects />
        {/* <CodingProfiles /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
