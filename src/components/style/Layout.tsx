import styled from '@emotion/styled';

interface LayoutProps {
  backgroundColor: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const Layout = styled.div(
  {
    width: '100%',
    height: '100vh',
    display: 'flex',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  (props: LayoutProps) => ({
    backgroundColor: props.backgroundColor,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    flexDirection: props.flexDirection,
  })
);

export default Layout;
