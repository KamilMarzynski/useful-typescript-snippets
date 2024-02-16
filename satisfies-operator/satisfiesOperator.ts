type ColorString = 'red' | 'blue' | 'yellow' | 'purple';
type ColorRGB = [red: number, green: number, blue: number];

type Color = ColorString | ColorRGB;

type Theme = Record<'primary' | 'secondary' | 'tertiary', Color>;

const theme0 = {
	primary: 'red',
	secondary: [0, 255, 0],
	tertiary: 'purpel' // <- no error here, no type validation
}


const theme: Theme = {
	primary: 'red',
	secondary: [0, 255, 0],
	tertiary: 'purpel' // <- this shows error, typo
}

const secondary = theme.secondary[3] // does not show error, it might be string or array so it's ok

const theme2 = {
	primary: 'red',
	secondary: [0, 255, 0],
	tertiary: 'purpel' // <- this shows error, typo
} satisfies Theme;

const secondary2 = theme2.secondary[3] // shows error, its [number, number, number] so have no index 3
	                                   // type of secondary2 was not changed to Color. It is still [number, number, number]