import * as React from 'react'
import PostForm from 'components/PostForm'
import useCreatePost from 'hooks/useCreatePost'

export default function CreateNewPost() {
  const [createPost, { status: createPostStatus }] = useCreatePost()
  return (
    <section>
      <h3>Create New Post</h3>
      <div>
        <PostForm
          onSubmit={createPost}
          submitText={
            createPostStatus === 'loading'
              ? 'Saving...'
              : createPostStatus === 'error'
              ? 'Error!'
              : createPostStatus === 'success'
              ? 'Saved!'
              : 'Create Post'
          }
        />
      </div>
    </section>
  )
}
