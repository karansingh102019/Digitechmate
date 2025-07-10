import { createBrowserRouter } from "react-router";
import Navbar from "../components/nav/navbar";
import BlockchainDeveloper from "../pages/BlockchainDeveloper";
import FrontEnd from "../pages/FrontEnd";
import Mean from "../pages/MEANStack";
import MernStack from "../pages/MERNStack";
import Python from "../pages/PyFullStack";
import UIDev from "../pages/UIDev";
import BackendDev from "../pages/BackendDeveloper";
import Home from "../components/home/Home";
import CourseProfile from "../components/course/coursesProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/BlockchainDeveloper",
    element: (
      <>
        <Navbar />
        <BlockchainDeveloper />
      </>
    ),
  },
  {
    path: "/FrontEnd",
    element: (
      <>
        <Navbar />
        <FrontEnd />
      </>
    ),
  },
  {
    path: "/MeanStack",
    element: (
      <>
        <Navbar />
        <Mean />
      </>
    ),
  },
  {
    path: "/MernStack",
    element: (
      <>
        <Navbar />
        <MernStack />
      </>
    ),
  },
  {
    path: "/python",
    element: (
      <>
        <Navbar />
        <Python />
      </>
    ),
  },
  {
    path: "/uidev",
    element: (
      <>
        <Navbar />
        <UIDev />
      </>
    ),
  },
  {
    path: "/BackendDev",
    element: (
      <>
        <Navbar />
        <BackendDev />
      </>
    ),
  },
 {
  path: "/CourseProfile/:id",
  element: (
    <>
      <Navbar />
      <CourseProfile />
    </>
  )
}

]);
