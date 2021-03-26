import styled from '@emotion/styled';

interface ListViewProp {
  width: string;
  height: string;
  transform?: string;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
}

const ListView = styled.div(
  {
    overflow: 'scroll',
    display: 'flex',
  },
  (props: ListViewProp) => ({
    height: props.height,
    width: props.width,
    transform: props.transform,
    position: props.position,
  })
);

export default ListView;
