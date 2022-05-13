import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ShowCase from "./Components/ShowCase/ShowCase";
import About from "./Components/About/About";
import Speaker from "./Components/Speakers/Speaker";
import Jury from "./Components/Jury/Jury";
import Timeline from "./Components/Timeline/Timeline";
import Event from "./Components/Event Schedule/Event";

function App() {
  return (
    <>
      <Header />
      <ShowCase />
      <About />
      <Speaker />
      <Jury />
      <Timeline />
      <Event />
      <Footer />
    </>
  );
}

export default App;
