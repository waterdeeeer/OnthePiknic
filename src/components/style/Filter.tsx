import styled from '@emotion/styled';

interface FilterProps {
  zIndex?: number;
}

const Filter = styled.div(
  {
    backgroundImage: 'url(https://assets.potatojoayo.com/filter.png)',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  (props: FilterProps) => ({
    zIndex: props.zIndex,
  })
);

export default Filter;
