import styled, { CSSObject } from "@emotion/styled";

interface ContainerProps {
  width: number | string;
  height: number | string;
  zIndex?: number;
  margin?: number | string;
  display?: string;
  cursor?: string;
  transform?: string;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  transition?: string;
  opacity?: number;
  left?: number;
  backgroundColor?: string;
  boxShadow?: string;
  before?: CSSObject;
  hover?: CSSObject;
  borderRadius?: string;
  active?: CSSObject;
  justifyContent?: string;
  alignItems?: string;
  right?: number;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  lineHeight?: number;
  bottom?: number;
  border?: string;
  borderColor?: string;
  padding?: number | string;
  borderStyle?: string;
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
    transition: props.transition,
    opacity: props.opacity,
    left: props.left,
    backgroundColor: props.backgroundColor,
    boxShadow: props.boxShadow,
    "&:before": props.before,
    "&:hover": props.hover,
    "&:active": props.active,
    borderRadius: props.borderRadius,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    right: props.right,
    flexDirection: props.flexDirection,
    lineHeight: props.lineHeight,
    bottom: props.bottom,
    border: props.border,
    padding: props.padding,
    borderColor: props.borderColor,
    borderStyle: props.borderStyle,
  })
);

export default Container;
