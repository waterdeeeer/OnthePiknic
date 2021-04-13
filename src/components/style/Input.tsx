import styled, {CSSObject} from '@emotion/styled';

interface TextAreaProps{
	width?: CSSObject['width'];
	height?: CSSObject['height'];
	backgroundColor?: CSSObject['backgroundColor'];
	zIndex?: CSSObject['zIndex'];
	margin?: CSSObject['margin'];
	color?: CSSObject['color'];
	padding?: CSSObject['padding'];
	borderRadius?: CSSObject['borderRadius']
	fontFamily?: CSSObject['fontFamily']
}

const Input = styled.input({
	outline: 'none',
	resize: 'none',
	border: 'none',
},(props:TextAreaProps)=>({
	width: props.width,
	height: props.height,
	backgroundColor: props.backgroundColor,
	zIndex: props.zIndex,
	margin: props.margin,
	color: props.color,
	padding: props.padding,
	borderRadius: props.borderRadius,
	fontFamily: props.fontFamily
}));


export default Input;
