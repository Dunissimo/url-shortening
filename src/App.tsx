import { FC, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./App/components/pages/Home";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        {/* <Route path="/resources" element={<Resources />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
