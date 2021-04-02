import styled from "@emotion/styled";

interface ContainerProps {
  width: number;
  height: number;
  zIndex?: number;
  margin?: number | string;
  display?: string;
  cursor?: string;
  transform?: string;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  left?: number;
}

const Container = styled.div(
  {
    margin: 0,
  },
  (props: ContainerProps) => ({
    height: props.height,
    width: props.width,
    zIndex: props.zIndex,
    margin: props.margin,
    display: props.display,
    cursor: props.cursor,
    transform: props.transform,
    position: props.position,
    left: props.left,
  })
);

export default Container;
