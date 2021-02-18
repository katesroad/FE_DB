import { useMutation, useQuery } from 'react-query'
import axios from 'axios'

export const getPost = (key, postId) =>
  axios.get(`/api/posts/${postId}`).then((res) => res.data)

export function useGetPost(postId) {
  return useQuery(postId && ['post', postId], getPost)
}

export function updatePost(post) {
  axios.patch(`/api/posts/${post.id}`, post)
}

export function useUpdatePost(post) {
  return useMutation(post && ['post', postId, updatePost])
}

export function deletePost(post) {
  axios.delete(`/api/posts/${post.id}`)
}

export function useDeletePost(post) {
  return useMutation(post && ['post', post.id])
}
