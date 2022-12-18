import { Link, Routes, Route } from "react-router-dom";

import { Home, Videos, Gallery, Bios, Gigs } from "./pages";
import { useState } from "react";
import { ContentfulClientApi } from "contentful";
import { Footer } from "./components/Footer";

export function App({ client }: { client: ContentfulClientApi }) {
  const [menuVisible, setMenuVisible] = useState<boolean>(true);

  const displayStyle = menuVisible ? "block" : "none";

  return (
    <>
      <button
        id="mobilemenu"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        Menu
      </button>
      <div
        id="themenu"
        style={{ display: displayStyle }}
        className="menu-block"
      >
        <div className="menu">
          <ul>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/videos">
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gigs">
                Gigs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bios">
                Meet the Band
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home client={client} />} />
        <Route path="/videos" element={<Videos client={client}/>} />
        <Route path="/gallery" element={<Gallery client={client}/>} />
        <Route path="/gigs" element={<Gigs client={client}/>} />
        <Route path="/bios" element={<Bios client={client}/>} />
      </Routes>
      <Footer client={client} />
    </>
  );
}
