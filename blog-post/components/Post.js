import React from 'react'

export default function Post({ title, isFetching, id, content }) {
  return (
    <article>
      <h3>
        {title} {isFetching ? <small> Updating...</small> : null}
      </h3>
      <small>{id}</small>
      <div>
        <p>Post ID: {content}</p>
      </div>
      <hr />
    </article>
  )
}
