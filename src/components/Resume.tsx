import { useState } from "react";
import { Popover } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";

export function Resume() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <ResponsiveAppBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "85vh",
          paddingBottom: 0,
          margin: "1em 0 1em 0",
        }}
      >
        <img
          onClick={() => setShowModal(true)}
          src="/Sam Freedgood - Software Engineer.png"
          alt="CV image"
        />
      </div>
      <Popover open={showModal} onClick={() => setShowModal(false)}>
        <img
          src="/Sam Freedgood - Software Engineer.png"
          alt="Fullscreen CV image"
        />
      </Popover>
    </>
  );
}
