import React from 'react'
import { Wrapper, Sidebar, Main } from '../components/styled'
import PostList from '../components/PostList'
import PostStats from '../components/PostStats'
import Post from '../components/PostScreen'

function App() {
  const [activePostId, setActivePostId] = React.useState()

  return (
    <Wrapper>
      <Sidebar>
        <a href="#" onClick={() => setActivePostId()}>
          All Posts
        </a>
        <hr />
        <PostStats setActivePostId={setActivePostId} />
      </Sidebar>
      <Main>
        {activePostId ? (
          <Post activePostId={activePostId} setActivePostId={setActivePostId} />
        ) : (
          <PostList setActivePostId={setActivePostId} />
        )}
      </Main>
    </Wrapper>
  )
}

export default App
