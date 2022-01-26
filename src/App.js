import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import AllProjects from "./components/allProjects";
import Contact from "./components/contact";
import { FormspreeProvider } from "@formspree/react";

function App(props) {
  return (
    <FormspreeProvider project="1771700540435069968">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </div>
    </FormspreeProvider>
  );
}

export default App;

// font-family: 'DM Sans', sans-serif;
// font-family: 'Montserrat', sans-serif;
