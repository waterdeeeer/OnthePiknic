import styled from "@emotion/styled";

interface ListViewProp {
  width: string;
  height: string;
  transform?: string;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  zIndex?: number;
  transition?: string;
  overflow?: string;
  left?: number;
}

const ListView = styled.div(
  {
    display: "flex",
    overflow: "hidden",
  },
  (props: ListViewProp) => ({
    height: props.height,
    width: props.width,
    transform: props.transform,
    position: props.position,
    zIndex: props.zIndex,
    transition: props.transition,
    overflow: props.overflow,
    left: props.left,
  })
);

export default ListView;
