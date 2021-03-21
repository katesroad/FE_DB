import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";
import * as React from "react";
import { Content } from "components/lib";
import {
	IconFacebook,
	IconPinerest,
	IconTwitter,
	IconYoutube,
	IconInstgram,
} from "components/Icons";
import { SocialIcons, PageLinks, InviteButton } from "./styles";

export default function Footer() {
	return (
		<footer
			css={`
				align-self: flex-end;
				padding: 3.5rem 0;
				background-color: var(--black);
				width: 100%;
				color: var(--white);
				${mediaQueries.medium} {
					padding: 4rem 0;
				}
			`}
		>
			<Content
				css={`
					display: flex;
					flex-direction: column;
					align-items: center;
					${mediaQueries.medium} {
						flex-direction: row;
						align-items: center;
					}
				`}
			>
				<div
					css={`
						text-align: center;
						${mediaQueries.medium} {
							display: flex;
							align-items: center;
							flex-grow: 1;
							text-align: left;
						}
					`}
				>
					<div>
						<span className="logo">logo</span>
						<SocialIcons>
							<span>
								<IconFacebook />
							</span>
							<span>
								<IconYoutube />
							</span>
							<span>
								<IconTwitter />
							</span>
							<span>
								<IconPinerest />
							</span>
							<span>
								<IconInstgram />
							</span>
						</SocialIcons>
					</div>
					<PageLinks />
				</div>
				<div
					css={`
						display: flex;
						flex-direction: column;
						min-width: 172px;
						.copyright {
							margin-top: 2.125rem;
							color: var(--gray);
						}
						${mediaQueries.medium} {
							min-width: 220px;
						}
					`}
				>
					<InviteButton>get invited</InviteButton>
					<p className="copyright">
						<small>Copyright 2019. All rights Reserved</small>
					</p>
				</div>
			</Content>
		</footer>
	);
}
