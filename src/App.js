import "./styles.css";
import { Suspense, lazy, useState } from "react";
import Loader from "./Loader";
import { Routes, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import SideNav from "./Layout/SideNav";
import { Commits as CommitsPage } from "./Pages/Commits";
const PrsPage = lazy(() => import("./Pages/Prs"));

export default function App() {
  const [menuShown, setMenuShown] = useState(false);
  const toggleMenu = () => setMenuShown(!menuShown);
  return (
    <div className="MainWrap">
      <SideNav menuShown={menuShown} />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<CommitsPage />} />
            <Route
              path="/prs"
              element={
                <Suspense fallback={<Loader />}>
                  <PrsPage />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
