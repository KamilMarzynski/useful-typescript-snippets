type Size = 'small' | 'medium' | 'large'
type Color = 'primary' | 'seconadary'
type Style = `${Size}-${Color}`;

function applyStyle(style: Style) {}

applyStyle('small-primary') // OK
applyStyle('midim-secondary') // Error