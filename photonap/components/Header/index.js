import styled from "styled-components/macro";
import * as React from "react";
import { Button, Content } from "components/lib";
import NavItems from "components/NavItems";
import Link from "next/link";

export default function Header() {
	return (
		<Content
			as="header"
			css={`
				display: flex;
				justify-content: space-between;
				padding-top: 16px;
				padding-bottom: 16px;
			`}
		>
			<Link
				href="/"
				css={`
					cursor: pointer;
				`}
			>
				<img
					src="https://fem-photosnap-app-g8glvjkbv-asaulters.vercel.app/assets/shared/desktop/logo-black.svg"
					alt="photosnap"
				/>
			</Link>
			<div
				css={`
					display: flex;
				`}
			>
				<button>x</button>
				<nav>
					<NavItems
						css={`
							display: flex;
							flex-direction: row;
							align-items: center;
							li {
								margin-left: 16px;
							}
						`}
					>
						<li>
							<Button>Get an invitation</Button>
						</li>
					</NavItems>
				</nav>
			</div>
		</Content>
	);
}
