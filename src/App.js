import { Suspense } from "react";
import "./App.css";
import Loader from "./Loader";
import Swr from "./Swr";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Swr />
      </Suspense>
    </div>
  );
}

export default App;
