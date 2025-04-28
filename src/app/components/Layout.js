'use client';

import Footer from "./Footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer/>
    </div>
  );
}
