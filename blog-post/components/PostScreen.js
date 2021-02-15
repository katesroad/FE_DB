import React from 'react'
import PostForm from './PostForm'
import Post from './Post'
import { useGetPost, useDeletePost, useUpdatePost } from 'hooks/usePost'

export default function PostScreen({ activePostId, setActivePostId }) {
  const { status, data: post, error, isFetching } = useGetPost(activePostId)
  const [savePost, { status: savePostStatus }] = useUpdatePost()
  const [deletePost, { status: deletePostStatus }] = useDeletePost()

  const onDelete = async () => {
    deletePost(post.id)
    setActivePostId()
  }

  return (
    <div>
      {status === 'loading' ? <span>loading...</span> : null}
      {status === 'error' ? <span>Error: {error.message}</span> : null}
      <Post isFetching={isFetching} {...post} />
      <hr />
      <PostForm
        initialValues={post}
        onSubmit={savePost}
        submitText={
          savePostStatus === 'loading'
            ? 'Saving...'
            : savePostStatus === 'error'
            ? 'Error!'
            : savePostStatus === 'success'
            ? 'Saved!'
            : 'Update Post'
        }
      />

      <br />

      <button onClick={onDelete}>
        {deletePostStatus === 'loading' ? '...' : 'Delete Post'}
      </button>
    </div>
  )
}
