export enum DISPLAY_SIZE {
	MOBILE = 800,
	TABLET = 1280,
	DESKTOP = 1920,
}

const breakpoints = [800, 1280, 1920];

const mediaquery = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default mediaquery;
