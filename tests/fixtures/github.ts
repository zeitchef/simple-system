export const MOCK_USER_WITH_REPOS = 'MockUserWithRepos'
export const MOCK_USER_WITHOUT_REPOS = 'MockUserWithoutRepos'
export const MOCK_BAD_USERNAME = 'BadUsername'

export const MOCK_REPO_LIST = [
  {
    id: 1,
    name: 'First Test Repo',
    description: 'First test repository description',
    html_url: 'https://github.com/fake1',
    stargazers_count: 10,
  },
  {
    id: 2,
    name: 'Second Test Repo',
    description: 'Second test repository description',
    html_url: 'https://github.com/fake2',
    stargazers_count: 8,
  },
  {
    id: 3,
    name: 'Third Test Repo',
    description: 'Third test repository description',
    html_url: 'https://github.com/fake3',
    stargazers_count: 5,
  },
]

export const MOCK_RESPONSE = {
  total_count: 3,
  incomplete_results: false,
  items: [
    {
      login: 'MockUserLogin',
      id: 1,
    },
    {
      login: 'MockUserLogin',
      id: 2,
    },
  ],
}
