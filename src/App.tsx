import { BrowserRouter, Routes } from "react-router-dom";
import { Suspense } from "react";
import renderRoutes from "./route";
import Loader from "./component/loader";
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
