import Icon from "./Icon";
import externalLinkIcon from '../assets/external-link.png'
import ResponsiveAppBar from "./ResponsiveAppBar";
// import { NavBar } from "./ResponsiveAppBar";

export function Resume() {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{
          display: "flex",
          minWidth: "80vw",
          minHeight: "80vh",
          height: "fit-content",
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform"
      }}>
        <iframe loading="lazy" style={{
          width: "100%",
          border: "none",
        }}
          src="https://www.canva.com/design/DAF7BhkOGP0/wzuBuT9HyXwZDjbcfUDGyA/view?embed" allowFullScreen={true} allow="fullscreen">
        </iframe>
      </div>
      <Icon icon={externalLinkIcon} url="https://www.canva.com/design/DAF7BhkOGP0/wzuBuT9HyXwZDjbcfUDGyA/view?utm_content=DAF7BhkOGP0&utm_campaign=designshare&utm_medium=embeds&utm_source=link" altText="External Link" text="View Resume on Canva" />
    </>
  );
}