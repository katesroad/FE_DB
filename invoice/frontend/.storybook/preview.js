import AppProvider from "../src/context";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
	(Story) => (
		<AppProvider>
			<Story />
		</AppProvider>
	),
];
