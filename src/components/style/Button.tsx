import styled, {CSSObject} from '@emotion/styled'

interface ButtonProps {
	width?: CSSObject["width"];
	height?: CSSObject["height"];
	borderRadius?: CSSObject['borderRadius'];
	backgroundColor?: CSSObject['backgroundColor'];
	active?: CSSObject[':active'];
	zIndex?: CSSObject['zIndex'];
	display?: CSSObject['display'];
	justifyContent?: CSSObject['justifyContent'];
	alignItems?: CSSObject['alignItems'];
	color?: CSSObject['color'];
	fontFamily?: CSSObject['fontFamily'];
	padding?: CSSObject['padding'];
	transform?: CSSObject['transform'];
	minWidth?: CSSObject['minWidth'];
	position?: CSSObject['position'];
	fontSize?: CSSObject['fontSize'];
	margin?: CSSObject['margin'];
	maxWidth?: CSSObject['maxWidth'];
}

const Button = styled.div(
	{
		'&:active': {
			transform: 'scale(.96)'
		},
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		userSelect: 'none',
		color: ''
	}, (props: ButtonProps) => ({
		width: props.width,
		height: props.height,
		borderRadius: props.borderRadius,
		backgroundColor: props.backgroundColor,
		'&:active': props.active,
		zIndex: props.zIndex,
		display: props.display,
		justifyContent: props.justifyContent,
		alignItems: props.alignItems,
		color: props.color,
		fontFamily: props.fontFamily,
		padding: props.padding,
		transform: props.transform,
		minWidth: props.minWidth,
		position: props.position,
		fontSize: props.fontSize,
		margin: props.margin,
		maxWidth: props.maxWidth
	})
);


export default Button;
