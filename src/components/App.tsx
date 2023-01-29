import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;