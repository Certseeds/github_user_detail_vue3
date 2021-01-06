//
// @Github: https://github.com/Certseeds/github_user_detail_vue3
// @Organization: SUSTech
// @Author: nanoseeds
// @Date: 2021-01-02 00:33:28
// @LastEditors: nanoseeds
// @LastEditTime: 2021-01-06 11:39:00
// @License: AGPL3.0 or any later version
//
import { GithubAPIAddress } from "../public/public";
import axios from "axios";
const GithubAPIUser = GithubAPIAddress.concat("users/");
class GitHubUser {
  name: string;
  information: any;
  constructor(name: string) {
    this.name = name;
    this.getInformation();
  }
  getInformation(): void {
    axios.get(GithubAPIUser.concat(this.name)).then((Response: any) => {
      console.log(GithubAPIUser.concat(this.name));
      console.log(Response);
    });
  }
  get getName(): string {
    return this.name;
  }
}
export { GitHubUser };
