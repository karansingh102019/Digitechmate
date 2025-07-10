import "./index.css";
import { router } from "./route/MasterRoute";
import {  RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
