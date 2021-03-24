# Photonap project Summary

## Nextjs

- How to import resource from abosolute path(using public folder)
-

## Styling

- import google fonts

  - ```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM Sans"></link>
    ```
  - [How to find google fonts](https://fonts.google.com/)

- Responsive Styling
  - fixed padding for mobile version using rem
  - rem + vw for tablet version
  - Don't forget to check if the width ratio is fixed between the mobile to medium size, and the width to xlarge width
  - limit the max width for larget screen
- Group elements

  - check margin between elements
  - code margin between elements from parents element to children elements

- Styling Switch component(**Using absoulte position for circle**)

```js
export const Switch = styled.div.attrs(() => ({
	className: "button-switch",
}))`
	position: relative;
	margin-left: 2rem;
	margin-right: 2rem;
	width: 4rem;
	height: 2rem;
	padding: 0.25rem;
	border-radius: 1rem;
	background-color: #dfdfdf;
	cursor: pointer;
	&:after {
		content: "";
		display: block;
		position: absolute;
		left: 0.25rem;
		top: 0.25rem;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: var(--black);
		background-color: var(--black);
		transition: all 0.25s ease;
	}
	&.is-active {
		&:after {
			left: 2rem;
		}
	}
`;
```

- styled-components

  - add fixed property for styled component

  ```js
  const LinkButton = styled(`button`).attrs(() => ({
  	className: "btn btn--link",
  	as: "a",
  }))`
  	cursor: pointer;
  `;
  ```

  - Wrap genenral component to specified component

- **Headless UI idea(Learned from experience and reach-ui)**

  - make the fundamental stuff for UI and exposure fixed properties including class name, etc
  - styling the UI based on the using places
  - example:

  ```js
  <NavItems />
  ```

- align content

  - to make the text at the same high level
  - in the condition that icons have different size

  ```css
  align-items: baseline;
  ```
