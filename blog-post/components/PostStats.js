import * as React from 'react'
import usePosts from '../hooks/usePosts'
import { useGetPost } from '../hooks/usePost'

export default function PostStats({ setActivePostId }) {
  const { data: posts, status: postsStatus, error: postsError } = usePosts()

  const [postId, setPostId] = React.useState()
  const { data: post, status: postStatus, error: postError } = useGetPost(
    postId
  )

  return (
    <div>
      <div>
        Total Posts:{' '}
        {postsStatus === 'loading'
          ? '...'
          : postsStatus === 'error'
          ? postsError.message
          : posts.length}
      </div>
      <hr />
      <div>
        <div>
          Search Post ID:{' '}
          <input value={postId} onChange={(e) => setPostId(e.target.value)} />
        </div>
        <br />
        {postId ? (
          <div>
            {postStatus === 'loading' ? (
              <span>Loading...</span>
            ) : postStatus === 'error' ? (
              <span>Error: {postError.message}</span>
            ) : (
              <div>
                <small>Found:</small>
                <br />
                <a href="#" onClick={() => setActivePostId(post.id)}>
                  {post.title}
                </a>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}
