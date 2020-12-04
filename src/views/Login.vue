<template>
  <div class="login h-screen flex justify-center items-center">
    <div class="rounded-lg bg-white relative login-model shadow-lg pt-10 pb-10">
      <div
        :class="isLoad ? 'animate-pulse' : ''"
        class="bg-blue-400 h-1 transtion duration-500 absolute top-0 w-full"
      ></div>
      <div class="flex flex-col">
        <p class="m-auto text-2xl font-bold mb-5">Login</p>
        <div class="text-sm m-auto">
          Don't have an account yet?
          <router-link class="text-blue-400" to="/register"
            >Create Account</router-link
          >
        </div>
      </div>
      <div class="p-7">
        <InputApp v-model="hola" placeholder="Email"></InputApp>
        <InputApp
          type="password"
          class="mt-3"
          placeholder="Password"
        ></InputApp>
        <ButtonApp :load="isLoad" @click="test" class="mt-3">Login</ButtonApp>
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
      hola: ''
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
};
</script>

<style lang="less">
.login-model {
  width: 450px;
}
</style>