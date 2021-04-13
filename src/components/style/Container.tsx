import styled, {CSSObject} from '@emotion/styled';

interface ContainerProps {
	width?: number | string;
	height?: number | string;
	zIndex?: number;
	margin?: number | string;
	display?: string;
	cursor?: string;
	transform?: string;
	position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
	transition?: string;
	opacity?: number;
	backgroundColor?: string;
	borderRadius?: number;
	before?: CSSObject;
	boxShadow?: string;
	hover?: CSSObject;
	active?: CSSObject;
	justifyContent?: CSSObject['justifyContent'];
	alignItems?: CSSObject["alignItems"];
	right?: number;
	bottom?: number;
	flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	flex?: number;
	minHeight?: number | string;
	top?: CSSObject['top'];
	left?: CSSObject['left'];
	fontSize?: CSSObject['fontSize'];
	overflow?: CSSObject['overflow'];
	maxHiehgt?: CSSObject['maxHeight'];
}

const Container = styled.div(
	{
		margin: 0,
	},
	(props: ContainerProps) => ({
		height: props.height,
		right: props.right,
		width: props.width,
		zIndex: props.zIndex,
		margin: props.margin,
		display: props.display,
		cursor: props.cursor,
		borderRadius: props.borderRadius,
		transform: props.transform,
		backgroundColor: props.backgroundColor,
		position: props.position,
		transition: props.transition,
		opacity: props.opacity,
		'&:before': props.before,
		overflow: props.overflow,
		'&:active': props.active,
		boxShadow: props.boxShadow,
		left: props.left,
		'&:hover': props.hover,
		justifyContent: props.justifyContent,
		alignItems: props.alignItems,
		bottom: props.bottom,
		flex: props.flex,
		flexDirection: props.flexDirection,
		top: props.top,
		minHeight: props.minHeight,
		fontSize: props.fontSize,
		maxHeight: props.maxHiehgt
	})
);

export default Container;
