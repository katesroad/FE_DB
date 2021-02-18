import { Spinner } from "components/lib";
import * as React from "react";

import { useIsFetching } from "react-query";

export function GlobalFechingIndicator() {
	const isFetching = useIsFetching();
	return isFetching ? <Spinner /> : null;
}
