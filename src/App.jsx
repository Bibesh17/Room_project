import { useState } from "react";

import Navbar from "./components/navigation";
import About from "./components/about";
import Hero from "./components/hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mt-15 bg-blue-200">
        <Navbar />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
