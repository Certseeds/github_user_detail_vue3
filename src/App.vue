<!--
 * @Github: https://github.com/Certseeds/github_user_detail_vue3
 * @Organization: SUSTech
 * @Author: nanoseeds
 * @Date: 2021-01-02 00:23:17
 * @LastEditors: nanoseeds
 * @LastEditTime: 2021-01-06 11:36:39
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    ref="RefChilde"
    @click="fnCallChild"
    msg_in="Welcome to Your Vue.js + TypeScript App"
  />
  <GitHubUserComp
    ref="RefGitHubUserComp"
    @click="clickOfGitHubUser"
    v-bind:username_in="usernameOfGithubUser"
  />
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import GitHubUserComp from "./components/GitHubUser.vue";
import HelloWorld from "./components/HelloWorld.vue";

//export default class App extends Vue {}
const AppMain = defineComponent({
  name: "father",
  components: { HelloWorld, GitHubUserComp },
  setup(): {
    usernameOfGithubUser: string;
    RefChilde: Ref<unknown>;
    RefGitHubUserComp: Ref<unknown>;
    fnCallChild: () => void;
    clickOfGitHubUser: () => void;
  } {
    let usernameOfGithubUser = "Certseeds";
    const RefChilde = ref(); //RefChilde 要和Son组件上的class名相同
    const RefGitHubUserComp = ref();
    const fnCallChild = () => {
      RefChilde.value.reversedMessage();
    };
    const clickOfGitHubUser = function () {
      const RefGitHubUserComp_value = RefGitHubUserComp.value;
      usernameOfGithubUser += "1";
      RefGitHubUserComp_value.username = usernameOfGithubUser;
      console.log(usernameOfGithubUser);
      RefGitHubUserComp_value.reversedMessage();
    };
    return {
      usernameOfGithubUser,
      RefChilde,
      RefGitHubUserComp,
      fnCallChild,
      clickOfGitHubUser,
    };
  },
  // mounted() {
  //   const clickOfGitHubUser = function () {
  //     usernameOfGithubUser = usernameOfGithubUser + "1";
  //     console.log(usernameOfGithubUser);
  //     RefGitHubUserComp.value.reversedMessage();
  //   };
  // }
});
export default AppMain;
</script>
<style scoped></style>
