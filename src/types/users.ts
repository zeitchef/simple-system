//---------------------------------------- Search User

interface SearchUserItem {
  login: string
  id: number
  node_id: string
  avatar_url?: URL
  gravatar_id?: URL
  url: URL
  html_url: URL
  followers_url?: URL
  subscriptions_url?: URL
  organizations_url?: URL
  repos_url?: URL
  received_events_url?: URL
  type: string
  score?: number
  following_url?: URL
  gists_url?: URL
  starred_url?: URL
  events_url?: URL
  site_admin?: boolean
}

export interface SearchUsersResponse {
  total_count: 12
  incomplete_results: false
  items: SearchUserItem[]
}

//---------------------------------------- Get User

export interface GetUserResponse {
  login: string
  id: number
  node_id: string
  avatar_url?: URL
  gravatar_id?: URL
  url: URL
  html_url?: URL
  followers_url?: URL
  following_url?: URL
  gists_url?: URL
  starred_url?: URL
  subscriptions_url?: URL
  organizations_url?: URL
  repos_url?: URL
  events_url?: URL
  received_events_url?: URL
  type?: string
  site_admin?: boolean
  name: string
  company?: string
  blog?: string
  location?: string
  email?: string
  hireable?: boolean
  bio?: string
  twitter_username?: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

//---------------------------------------- Repos

interface RepoOwner {
  login: string
  id: number
  node_id: string
  avatar_url: URL
  gravatar_id: string
  url: URL
  html_url: URL
  followers_url: URL
  following_url: URL
  gists_url: URL
  starred_url: URL
  subscriptions_url: URL
  organizations_url: URL
  repos_url: URL
  events_url: URL
  received_events_url: URL
  type: string
  site_admin: boolean
}

interface UserRepo {
  id: number
  node_id: string
  name: string
  full_name: string
  owner: RepoOwner
  private: boolean
  html_url: URL
  description: string
  fork: boolean
  url: URL
  archive_url: URL
  assignees_url: URL
  blobs_url: URL
  branches_url: URL
  collaborators_url: URL
  comments_url: URL
  commits_url: URL
  compare_url: URL
  contents_url: URL
  contributors_url: URL
  deployments_url: URL
  downloads_url: URL
  events_url: URL
  forks_url: URL
  git_commits_url: URL
  git_refs_url: URL
  git_tags_url: URL
  git_url: URL
  issue_comment_url: URL
  issue_events_url: URL
  issues_url: URL
  keys_url: URL
  labels_url: URL
  languages_url: URL
  merges_url: URL
  milestones_url: URL
  notifications_url: URL
  pulls_url: URL
  releases_url: URL
  ssh_url: URL
  stargazers_url: URL
  statuses_url: URL
  subscribers_url: URL
  subscription_url: URL
  tags_url: URL
  teams_url: URL
  trees_url: URL
  clone_url: URL
  mirror_url: URL
  hooks_url: URL
  svn_url: URL
  homepage: URL
  language?: string
  forks_count?: number
  stargazers_count?: number
  watchers_count?: number
  size?: number
  default_branch?: string
  open_issues_count: number
  is_template: boolean
  topics: string[]
  has_issues: boolean
  has_projects: boolean
  has_wiki: boolean
  has_pages: boolean
  has_downloads: boolean
  has_discussions: boolean
  archived: boolean
  disabled: boolean
  visibility: string
  pushed_at: Date
  created_at: Date
  updated_at: Date
  permissions: {
    admin: boolean
    push: boolean
    pull: boolean
  }
  security_and_analysis: {
    advanced_security: {
      status: string
    }
    secret_scanning: {
      status: string
    }
    secret_scanning_push_protection: {
      status: string
    }
  }
}

export type UserReposResponse = UserRepo[]
