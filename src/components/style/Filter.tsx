import styled from '@emotion/styled';
import {IMAGE_BASE_URL} from '../../api'

interface FilterProps {
	zIndex?: number;
	padding?: string;
}

const Filter = styled.div(
	{
		backgroundImage: `url(${IMAGE_BASE_URL}/filter.png)`,
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
