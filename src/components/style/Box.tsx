import styled from '@emotion/styled';

interface BoxProps {
  minWidth: string | number;
  minHeight: string | number;
  display?: string;
}
const Box = styled.div({}, (props: BoxProps) => ({
  minWidth: props.minWidth,
  minHeight: props.minHeight,
  display: props.display,
}));

export default Box;
