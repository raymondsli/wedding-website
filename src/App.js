import "./App.css";
import Seperator from "./components/Seperator.js";
import Details from "./pages/detailsPage/Details.js";
import Schedule from "./pages/schedulePage/Schedule.js";
import Dinner from "./pages/dinnerPage/Dinner.js";
import FAQ from "./pages/faqPage/FAQ.js";

function App() {
  return (
    <div>
      <Details />
      <Schedule />
      <Seperator />
      <Dinner />
      <Seperator />
      <FAQ />
    </div>
  );
}

export default App;
