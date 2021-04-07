import styled from '@emotion/styled';

interface TextProps {
  fontSize: number;
  fontFamily?: string;
  color?: string;
  letterSpacing?: number;
  display?: string;
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent';
  width?: number;
  transform?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  lineHeight?: number;
}

const Text = styled.p(
  {
    userSelect: 'none',
    margin: 0,
    mixBlendMode: 'initial',
  },
  (props: TextProps) => ({
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    color: props.color,
    textAlign: props.textAlign,
    letterSpacing: props.letterSpacing,
    width: props.width,
    transform: props.transform,
    flexDirection: props.flexDirection,
    display: props.display,
    lineHeight: props.lineHeight,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    margin: props.margin,
  })
);

export default Text;
