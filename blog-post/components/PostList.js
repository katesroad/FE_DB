import React from 'react'
import { queryCache } from 'react-query'
import useInfinitePosts from '../hooks/useInfinitePosts'
import { getPost } from 'hooks/usePost'
import CreateNewPost from './CreateNewPost'

export default function PostList({ setActivePostId }) {
  const {
    status,
    data: postPages,
    error,
    isFetching,
    isFetchingMore,
    canFetchMore,
    fetchMore,
  } = useInfinitePosts()

  const handleMouseEnter = () => {
    if (!queryCache.getQuery(['post', post.id])) {
      queryCache.prefetchQuery(['post', post.id], getPost, {
        staleTime: 1000 * 60,
      })
    }
  }

  const handleClickPostTitle = (e) => {
    return (post) => setActivePostId(post.id)
  }

  const handleFetchMore = (e) => {
    fetchMore()
  }
  return (
    <section>
      <div>
        <div>
          {status === 'loading' ? (
            <span>Loading...</span>
          ) : status === 'error' ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <h3>
                Posts{' '}
                {isFetching && !isFetchingMore ? (
                  <small>Updating...</small>
                ) : null}
              </h3>
              <div>
                {postPages.map((page, index) => (
                  <React.Fragment key={index}>
                    {page.items.map((post) => (
                      <div key={post.id}>
                        <a
                          href="#"
                          onClick={handleClickPostTitle(post)}
                          onMouseEnter={handleMouseEnter}
                        >
                          {post.title}
                        </a>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
              <br />
              <button onClick={handleFetchMore} disabled={!canFetchMore}>
                {isFetchingMore
                  ? 'Loading more...'
                  : canFetchMore
                  ? 'Load More'
                  : 'Nothing more to load'}
              </button>
            </>
          )}
        </div>
      </div>
      <hr />
      <CreateNewPost />
    </section>
  )
}
