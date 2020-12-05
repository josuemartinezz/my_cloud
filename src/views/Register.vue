<template>
  <div class="login h-screen flex justify-center items-center">
    <div class="rounded-lg bg-white login-model relative shadow-lg pt-10 pb-10">
      <div
        :class="isLoad ? 'animate-pulse' : ''"
        class="bg-blue-400 h-1 transtion duration-500 absolute top-0 w-full"
      ></div>
      <div class="flex flex-col">
        <p class="m-auto text-2xl font-bold mb-5">Create account</p>
        <div class="text-sm m-auto">
          Already hace an account?
          <router-link class="text-blue-400" to="/login">Sign in</router-link>
        </div>
      </div>
      <div class="p-7">
        <InputApp placeholder="Name"></InputApp>
        <InputApp class="mt-3" placeholder="Email"></InputApp>
        <InputApp
          type="password"
          class="mt-3"
          placeholder="Password"
        ></InputApp>
        <InputApp
          type="password"
          class="mt-3"
          placeholder="Repeat password"
        ></InputApp>
        <ButtonApp :load="isLoad" @click="test" class="mt-3"
          >Register</ButtonApp
        >
      </div>
    </div>
  </div>
</template>

<script>
import InputApp from "@/components/InputApp";
import ButtonApp from "@/components/ButtonApp";
export default {
  name: "Login",
  data() {
    return {
      isLoad: false,
    };
  },
  components: {
    InputApp,
    ButtonApp,
  },
  methods: {
    test() {
      this.isLoad = true;
      setTimeout(() => {
        this.isLoad = false;
      }, 2000);
    },
  },
  metaInfo: {
    titleTemplate: "%s | Register",
    meta: [
      { charset: "utf-8" },
      { head: 'ssr', hid: "description", name: "description", content: "Register a new account with kisscloud" },
    ],
  },
};
</script>

<style lang="less">
.login-model {
  width: 450px;
}
</style>