import Banner from "./components/Banner";
import Metadata from "./components/Metadata";
import Filmstrip from "./components/Filmstrip";
import { TemplateProvider } from "./components/TemplateContext";

import "./app.css";

function App() {
  return (
    <div className="App">
      <TemplateProvider>
        <div className="display-container">
          <h1 className="container-heading">Filmstrip View</h1>
          <hr />
          <div className="selected-template-details">
            <Banner />
            <Metadata />
          </div>
          <Filmstrip />
        </div>
      </TemplateProvider>
    </div>
  );
}

export default App;
