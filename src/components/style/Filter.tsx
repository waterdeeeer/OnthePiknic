import styled from '@emotion/styled';

interface FilterProps {
  zIndex?: number;
  padding?: string;
}

const Filter = styled.div(
  {
    backgroundImage: 'url(https://assets.potatojoayo.com/filter.png)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  (props: FilterProps) => ({
    zIndex: props.zIndex,
    padding: props.padding,
  })
);

export default Filter;
