import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Landing from "./screens/Landing.jsx";
import "./index.css";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>The Echo Room</title>
        <meta
          name="description"
          content="Your Voice Matters. Let It Echo. A movement amplifying young African voices for change."
        />
      </Helmet>
      <Landing />
    </HelmetProvider>
  );
}
