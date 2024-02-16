type Color = ColorString | ColorRGB;
type ColorString = 'red' | 'blue' | 'yellow' | 'purple';
type ColorRGB = [red: number, green: number, blue: number];

type Theme = Record<string, Color>;

const theme: Theme = {
	primary: 'red',
	secondary: [0, 255, 0],
	tertiary: 'purpel' // <- this shows error, typo
}

const [r, g, b] = theme.secondary; // <- as of ts version 5.0.0 this is not showing error, but it always annotates type Color and r, g, b as string | number
let primary = theme.primary // Color
let secondary = theme.secondary // Color
let tertiary = theme.tertiary // Color

const theme2 = {
	primary: 'red',
	secondary: [0, 255, 0],
	tertiary: 'purpel' // <- this shows error, typo
} satisfies Theme;

const primary2 = theme2.primary; // 'red'
const secondary2 = theme2.secondary; // [number, number, number]
const tertiary2 = theme2.tertiary; // 'purpel'