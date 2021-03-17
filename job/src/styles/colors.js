// colors from styling guide
const p00 = "#5964E0";
const p01 = "#fff";

const p10 = "#939BF4";
const p11 = "#f4f6f8";

const p20 = "#19202D";
const p21 = "#9DAEC2";

const p30 = "#121721";
const p31 = "#6E8098";

export const colors = {
	p00,
	p01,
	p10,
	p11,
	p20,
	p21,
	p30,
	p31,
};
// dark theme
export const dark = {
	title: { color: p01 },
	element: { bg: p20, color: colors.p31 },
	button: {},
	body: { bg: p30 },
};
// light theme
export const light = {
	title: { color: p20 },
	element: { bg: p01, color: colors.p31 },
	button: { bg: p00, color: p01, hover: p10 },
	body: { bg: p01 },
};
