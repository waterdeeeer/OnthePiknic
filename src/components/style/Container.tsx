import styled from '@emotion/styled';

interface ContainerProps {
  width: number;
  height: number;
}

const Container = styled.div({}, (props: ContainerProps) => ({
  height: props.height,
  width: props.width,
}));

export default Container;
