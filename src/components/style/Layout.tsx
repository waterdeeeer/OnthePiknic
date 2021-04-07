import styled from "@emotion/styled";

interface LayoutProps {
  backgroundColor: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  overflow?: string;
  position?: "absolute" | "relative";
  height?: number;
  padding?: number | string;
}

const Layout = styled.div(
  {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  (props: LayoutProps) => ({
    backgroundColor: props.backgroundColor,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    flexDirection: props.flexDirection,
    overflow: props.overflow,
    position: props.position,
    height: props.height,
    padding: props.padding,
  })
);

export default Layout;
