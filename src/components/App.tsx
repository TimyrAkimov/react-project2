import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../docs/Home";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;