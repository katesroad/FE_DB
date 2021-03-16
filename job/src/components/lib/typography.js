import styled from "styled-components";
import { variant } from "styled-system";
import { colors } from "styles/colors";

export const Typography = styled("div")(
	{
		fontFamily: "inherit",
		color: "var(--title-color)",
		"&:hover": {
			color: "${colors.p31}",
		},
	},
	variant({
		variants: {
			h1: { fontSize: "28px", lineHeight: "34px" },
			h2: { fontSize: "24px", lineHeight: "29px" },
			h3: { fontSize: "20px", lineHeight: "24px" },
			h4: { fontSize: "14px", lineHeight: "18px" },
			body: { fontSize: "16px", lineHeight: "26px", color: "inherit" },
			location: {
				fontSize: "16px",
				lineHeight: "26px",
				color: "inherit",
				color: colors.p00,
			},
		},
	})
);
