import { Link, Routes, Route } from "react-router-dom";

import { Home, Videos, Gallery, Bios, Gigs } from "./pages";

export function App() {
  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/gigs">Gigs</Link>
        <Link to="/bios">Meet the Band</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/bios" element={<Bios />} />
      </Routes>
    </>
  );
}
