// eslint-disable-next-line
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { colors } from "styles/colors";
import * as React from "react";
import { IconLogo, IconMoon, IconSun } from "components/Icon";
import { useTheme, THEME_MODE } from "context/theme.context";

const { dark, light } = THEME_MODE;
export default function ThemeSwitcher(props) {
	const [mode, setMode] = useTheme();
	const handleClick = () => {
		mode === light ? setMode(dark) : setMode(light);
		return false;
	};
	return (
		<div
			css={`
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: no-wrap;
				flex-grow: 1;
			`}
			{...props}
		>
			<Link to="/">
				<IconLogo />
			</Link>
			<p
				css={`
					display: flex;
					align-items: center;
					justify-content: space-between;
					button {
						position: relative;
						margin: 0 16px;
						width: 48px;
						height: 24px;
						padding: 5px;
						border-radius: 12px;
						background-color: #fff;
					}
					.circle {
						position: absolute;
						top: 5px;
						left: 5px;
						display: block;
						width: 14px;
						height: 14px;
						border-radius: 50%;
						background-color: ${colors.p00};
						transition: all 0.25s ease;
						&.to-right {
							left: 29px;
						}
					}
				`}
			>
				<IconSun />
				<button onClick={handleClick}>
					<span
						className={mode === light ? "circle" : "circle to-right"}
					></span>
				</button>
				<IconMoon />
			</p>
		</div>
	);
}
