# Summary for frontend

## Use third-party lib or UI

Directly rewrite the styling(using sass) of the third-party component is more convinient than wrapping the component with
_styled-component_.

## Formik

- You don't have to have a input/checkbox field for form validation purpose.
  What you want to make sure to have is providing the correct **initialValues** and **validationSchema**

- **useField** and Field can be used in a combination way.

  > 1. Without knowing validation status outside of the Field(Formik Field)

  ```js
  const InputField = (props) => (
  	<>
  		<div>
  			<Field {...props} />
  		</div>
  		<Error className="error-msg" as="small">
  			<ErrorMessage name={props.name} />
  		</Error>
  	</>
  );
  ```

  > 2. Want to access the validation status on the parent element of input

  ```js
  const TextField = React.memo(({ label, name, children, ...props }) => {
  	const [field, meta] = useField({ name, ...props });
  	const error = meta.touched && meta.error;
  	return (
  		<>
  			<Input
  				{...props}
  				{...field}
  				id={name}
  				name={name}
  				className={error ? "error" : ""}
  			/>
  			<FieldError>
  				<ErrorMessage name={name} />
  			</FieldError>
  			{children}
  		</>
  	);
  });
  ```

## React-Query

- Cache

  1. cache/stale time is in **miliseconds**
  2. staleTime reachedd, refetch for that query happens automatically.
  3. the default value for cacheTime is 5 minutes, staleTime is zero.
  4. How to access the data stored in cache

  ```js
  const queryClient = useQueryClient;
  const data = queryClient.getQueryData(queryKey);
  ```

- Code structure
  -Seperate ajax generation function with hooks that is buit based on using hooks of react-query for code reusable purpose.

  ```js
  export function getUser() {
  	return axios.get("auth/token");
  }
  export function useGetUser() {
  	const queryClient = useQueryClient();
  	return useQuery(["user"], getUser, {
  		...conf,
  		onError: () => queryClient.setQueryData(["user"], null),
  	});
  }
  ```

- onError: onError happpens after all the retry operations are failed

- reftech authentication after access token is expired

please refer to [axios](./utils/axios.js)

## React

- use the children as the function that renders the final internal UI of a component

```js
<Formik>
	{(props) => <form onSubmit={props.handleSubmit}>{/**some code here**/}</form>}
</Formik>
```
