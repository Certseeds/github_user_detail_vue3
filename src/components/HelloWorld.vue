<!--
 * @Github: https://github.com/Certseeds/github_user_detail_vue3
 * @Organization: SUSTech
 * @Author: nanoseeds
 * @Date: 2021-01-02 00:23:17
 * @LastEditors: nanoseeds
 * @LastEditTime: 2021-01-02 22:38:16
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const Helloworld = defineComponent({
  props: {
    msg_in: { type: String },
  },
  data(): {
    msg: string;
    number1: number;
  } {
    return {
      msg: this.msg_in ?? "Init Value",
      number1: 2,
    };
  },
  methods: {
    reversedMessage(): void {
      this.msg = this.msg.split(" ").reverse().join(" ");
      this.number1 += 1;
    },
  },
  watch: {
    msg_in(msg_in: string): void {
      this.msg = msg_in;
      console.log(__filename);
    },
  },
});
export default Helloworld;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
