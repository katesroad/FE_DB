# Notes

- Global state
  > 1.  App State
  > 2.  Server State

It brings us

> 1. Avoid Prop Drilling
> 2. Accessed, not copied
> 3. Shared comuinication

- Our mistake,

**Async Data not equal to client state**

> 1.  Where they are stored
> 2.  Speed of access them
> 3.  How they are accessed
> 4.  Who can make changes

- Split global state into

> 1.  Client State
> 2.  Server State

- Client State

  > 1.  It is local
  > 2.  Non-persistent
  > 3.  Synchrnouse
  > 4.  Client owned
  > 5.  Reliable up-to-date

- Server state

  - Server state
    > 1. remotely persisted(potentially unknown or at least outside of our control)
    > 2. Asynchronous
    > 3. Shared ownership(server/client and maybe anyother clients that have access to it)
    >    4.Potentially out-of-date
  - Challenges for server State
    > 1. Caching
    > 2. Deduping requests
    > 3. Background updates
    > 4. Outdated Requests
    > 5. Mutation
    > 6. Pagination/ incremental
    > 7. GC/Memory

- Version evolves

  - Writing business logic inside a component(Not cool)

  ```js
  function Posts() {
    const [status, setStatus] = React.useState('loading)
  }
  ```

  - Extract data fetching to custom hooks

  ```js
  import React from 'react'
  import axios from 'axios'
  export function useCreatePost( {
    const [status, setStatus] = React.useState('idle')
    const createPost = React.useCallBack((post) => {
      try {
        setStatus('loading');
        await axios.post('api/posts', post)
        setStatus('success');
      } catch (e) {
        setStatus('error');
        throw err;
      }
    })
    return {createPost, status}
  }


  export function usePosts( {
    const [status, setStatus] = React.useState('idle')
    const createPost = React.useCallBack((post) => {
      try {
        setStatus('loading');
        await axios.get('api/posts', post)
        setStatus('success');
      } catch (e) {
        setStatus('error');
        throw err;
      }
    })
    return {createPost, status}
  }}
  ```

  > 1.  This solution, everytime we use the _usePosts_ hook, we are creating a new instance of useState and useEffect

  - Turn the state and fetching logic into a global component

  ```js

  ```
