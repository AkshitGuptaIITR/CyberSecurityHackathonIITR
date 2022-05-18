import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ShowCase from "./Components/ShowCase/ShowCase";
import About from "./Components/About/About";
import Speaker from "./Components/Speakers/Speaker";
import Jury from "./Components/Jury/Jury";
import Timeline from "./Components/Timeline/Timeline";
import Event from "./Components/Event Schedule/Event";
import ProblemStatements from "./Components/ProblemStatements/ProblemStatements";
import Partner from "./Components/Partners/Partner";
import CountDown from "./Components/Countdown/CountDown";

function App() {
  return (
    <div id="app">
      <Header />
      <ShowCase />
      <CountDown />
      <About />
      <Speaker />
      <Jury />
      <Timeline />
      <Event />
      <ProblemStatements />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
