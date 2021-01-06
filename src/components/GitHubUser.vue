<!--
 * @Github: https://github.com/Certseeds/github_user_detail_vue3
 * @Organization: SUSTech
 * @Author: nanoseeds
 * @Date: 2021-01-02 00:23:17
 * @LastEditors: nanoseeds
 * @LastEditTime: 2021-01-06 11:37:36
-->
<template>
  <div class="github_user">
    <h1>{{ username }}</h1>
  </div>
</template>

<script lang="ts">
import { GitHubUser } from "@/classes/GithubUser";
import { defineComponent } from "vue";

const GitHubUserComp = defineComponent({
  props: {
    username_in: { type: String, default: "Certseeds" },
  },
  data(): {
    username: string;
    GitHubUser: GitHubUser;
  } {
    return {
      username: this.username_in,
      GitHubUser: new GitHubUser(this.username_in),
    };
  },
  methods: {
    reversedMessage(): void {
      this.username = this.username.split("").reverse().join("");
      console.log(GitHubUser);
      this.GitHubUser = new GitHubUser(this.username);
    },
  },
  watch: {
    msg_in(username_in: string): void {
      this.username = username_in;
      console.log(__filename);
    },
  },
});
export default GitHubUserComp;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
