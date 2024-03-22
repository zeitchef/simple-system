import axios from 'axios'
import { GetUserResponse, SearchUsersResponse, UserReposResponse } from '../types/users'

const GithubClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${import.meta.env.VITE_GH_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
})

// https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-users
export const searchUsers = async (query: string): Promise<SearchUsersResponse> => {
  const { data } = await GithubClient.get(`/search/users?q=${query}&page=1&per_page=5`)
  return data
}

// https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
export const getUser = async (username: string): Promise<GetUserResponse> => {
  const { data } = await GithubClient.get(`/users/${username}`)
  return data
}

// https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
export const getUserRepos = async (username: string): Promise<UserReposResponse> => {
  const { data } = await GithubClient.get(`/users/${username}/repos`)
  return data
}
