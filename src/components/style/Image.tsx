import styled from '@emotion/styled';

import mediaquery, { DISPLAY_SIZE } from '../utils/media_query';

interface ImageProps {
  backgroundImage?: string;
  width: number;
  height: number;
  position?: any;
  top?: number;
  right?: number;
  mobile?: ImageProps;
  tablet?: ImageProps;
  desktop?: ImageProps;
  cursor?: string;
  zIndex?: number;
  backgroundSize?: string;
}

const Image = styled.div(
  {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  (props: ImageProps) => ({
    backgroundImage: props.backgroundImage,
    width: props.width,
    height: props.height,
    position: props.position ?? 'relative',
    top: props.top,
    right: props.right,
    cursor: props.cursor,
    zIndex: props.zIndex,
    backgroundSize: props.backgroundSize,
    [mediaquery[DISPLAY_SIZE.MOBILE]]: props.mobile,
    [mediaquery[DISPLAY_SIZE.TABLET]]: props.tablet,
    [mediaquery[DISPLAY_SIZE.DESKTOP]]: props.desktop,
  })
);

export default Image;
