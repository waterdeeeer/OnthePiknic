import styled from '@emotion/styled';

import mediaquery, { DISPLAY_SIZE } from '../utils/media_query';
interface ImageProps {
  backgroundImage?: string;
  width: number;
  height: number;
  position?: any;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  cursor?: string;
  zIndex?: number;
  boxShadow?: number;
  mobile?: ImageProps;
  desktop?: ImageProps;
  tablet?: ImageProps;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}

const Image = styled.div(
  {
    margin: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  (props: ImageProps) => ({
    backgroundSize: props.backgroundSize,
    backgroundPosition: props.backgroundPosition,
    backgroundRepeat: props.backgroundRepeat,
    backgroundImage: props.backgroundImage,
    width: props.width,
    height: props.height,
    position: props.position,
    top: props.top,
    left: props.left,
    bottom: props.bottom,
    right: props.right,
    cursor: props.cursor,
    zIndex: props.zIndex,
    [mediaquery[DISPLAY_SIZE.MOBILE]]: props.mobile,
    [mediaquery[DISPLAY_SIZE.TABLET]]: props.tablet,
    [mediaquery[DISPLAY_SIZE.DESKTOP]]: props.desktop,
  })
);
export default Image;
