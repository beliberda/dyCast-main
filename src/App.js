import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


// import PageIndex from "./pages/page_index";
// import PageReg from "./pages/page_reg";
import PageLand from "./pages/page_land";
import PageUpload from "./pages/page_upload";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageUpload />} />
        {/* <Route path="/reg" element={<PageReg />} />
        <Route path="/land" element={<PageLand />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
