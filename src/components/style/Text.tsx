import styled from '@emotion/styled';

interface TextProps {
  fontSize: number;
  fontFamily?: string;
  color?: string;
  letterSpacing?: number;
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent';
  width?: number;
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
  })
);

export default Text;
