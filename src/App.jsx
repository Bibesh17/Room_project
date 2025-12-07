import { useState } from "react";

import Navbar from "./components/navigation";
import About from "./components/about";
import Hero from "./components/hero";
import Room from "./components/room";
import Facilities from "./components/facilities";
import ApplyForm from "./components/apply";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-blue-200">
        <Navbar />
        <Hero />
        <About />
        <Room />
        <Facilities />
        <ApplyForm />
      </div>
    </>
  );
}

export default App;
