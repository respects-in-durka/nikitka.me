import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";

export interface RepositoryOwner {
  login: string | null,
  id: number | null,
  node_id: string | null,
  avatar_url: string | null,
  gravatar_id: string | null,
  url: string | null,
  html_url: string | null,
  followers_url: string | null,
  following_url: string | null,
  gists_url: string | null,
  starred_url: string | null,
  subscriptions_url: string | null,
  organizations_url: string | null,
  repos_url: string | null,
  events_url: string | null,
  received_events_url: string | null,
  type: string | null,
  site_admin: boolean | null
}

export interface RepositoryLicense {
  key: string | null,
  name: string | null,
  spdx_id: string | null,
  url: string | null,
  node_id: string | null
}

export interface Repository {
  id: number,
  node_id: string,
  name: string,
  full_name: string | null,
  private: boolean | null,
  owner: RepositoryOwner | null,
  html_url: string,
  description: string | null,
  fork: boolean | null,
  url: string | null,
  forks_url: string | null,
  keys_url: string | null,
  collaborators_url: string | null,
  teams_url: string | null,
  hooks_url: string | null,
  issue_events_url: string | null,
  events_url: string | null,
  assignees_url: string | null,
  branches_url: string | null,
  tags_url: string | null,
  blobs_url: string | null,
  git_tags_url: string | null,
  git_refs_url: string | null,
  trees_url: string | null,
  statuses_url: string | null,
  languages_url: string | null,
  stargazers_url: string | null,
  contributors_url: string | null,
  subscribers_url: string | null,
  subscription_url: string | null,
  commits_url: string | null,
  git_commits_url: string | null,
  comments_url: string | null,
  issue_comment_url: string | null,
  contents_url: string | null,
  compare_url: string | null,
  merges_url: string | null,
  archive_url: string | null,
  downloads_url: string | null,
  issues_url: string | null,
  pulls_url: string | null,
  milestones_url: string | null,
  notifications_url: string | null,
  labels_url: string | null,
  releases_url: string | null,
  deployments_url: string | null,
  created_at: Date | null,
  updated_at: Date | null,
  pushed_at: Date | null,
  git_url: string | null,
  ssh_url: string | null,
  clone_url: string | null,
  svn_url: string | null,
  homepage: string | null,
  size: number | null,
  stargazers_count: number | null,
  watchers_count: number | null,
  language: string | null,
  has_issues: boolean | null,
  has_projects: boolean | null,
  has_downloads: boolean | null,
  has_wiki: boolean | null,
  has_pages: boolean | null,
  forks_count: number | null,
  mirror_url: string | null,
  archived: boolean | null,
  disabled: boolean | null,
  open_issues_count: number | null,
  license: RepositoryLicense,
  forks: number | null,
  open_issues: number | null,
  watchers: number | null,
  default_branch: string | null
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private repositories: Repository[] = [];

  constructor(private httpClient: HttpClient) { }

  fetchRepos(): Subscription {
    return this.httpClient.get<Repository[]>('https://api.github.com/users/respects-in-durka/repos').subscribe(repositories => this.repositories = repositories);
  }

  getRepos(): Repository[] {
    return this.repositories;
  }

}
