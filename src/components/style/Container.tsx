import styled from '@emotion/styled';

interface ContainerProps {
  width: number;
  height: number;
  zIndex?: number;
  margin?: number | string;
  display?: string;
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
  })
);

export default Container;
