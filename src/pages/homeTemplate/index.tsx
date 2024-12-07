import { Outlet } from "react-router-dom";
import Header from "./Component/Header";
export default function HomeTemplate() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </>
  );
}
