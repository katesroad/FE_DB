# Summaries

## React

- Update document title using `useEffect`

```js
React.useEffect(() => {
	if (job?.title) document.title = job.title;
	return () => (document.title = "Jobs");
}, []);
```

- Form searching happens after submitting instead of at the time user typing in

```js
const [filter, setFilter] = React.useState({
	description: "",
	location: "",
	full_time: false,
});

// job search happens after form submmiting triggered
const [doSearch, setDoSearch] = React.useState(true);
const [params, setParams] = React.useState({});
React.useEffect(() => doSearch && setParams(filter), [filter, doSearch]);

const { status, data: jobs, error } = useGetJobs(params);

const handleChange = (update) => {
	setDoSearch(false);
	setFilter({ ...filter, ...update });
};
const handleSubmit = () => setDoSearch(true);
```

- Use children to hold the specified content in a shared component

- How to group a list item component, we have

  - the item for that list
  - list
  - and the no data component

- **The boundary of using styled component and **css** on elements**
  - single element without children/child, put **css** property on elements - For component that styles styling for its children and content, using styled component

## CSS

- We don't care about line height stuff if the content is not a paragragh stuff
- Using **padding** instead of margin for margin between elements
- About a html tag

```css
a {
	color: inherit;
}
```

- styling placeholder

```css
 ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.p31};
    font-size: 16px;
    opacity: 1; /* Firefox */
  }

  ::-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${colors.p31};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${colors.p31};
  }
```

- Set button width

```js
.btn-apply {
  width: 100%;
  max-width: 160px;
}
```

5. Don't using

```css
/* to specify the styling */
& > div {
}
```

instead, using a component for it.

```js
const Content = styled.div`
	// margin to body elements
`;

const JobContent = styled(Content)``;
const HowToApply = styled(Content)``;
```

- About theme styling
  - extract text color
  - extract background color
  - extract title color
