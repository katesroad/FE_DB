// eslint-disable-next-line
import * as React from "react";
import { useParams } from "react-router-dom";

// Invoice detail page
export default function JobScreen() {
	const { id } = useParams();
	return <div>{id}</div>;
}
