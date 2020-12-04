<template>
  <div class="flex w-full">
    <input
      :placeholder="placeholder"
      :type="type"
      v-model="inputVal"
      class="w-full transition duration-500 rounded-lg p-2 text-xs border-2 hover:border-blue-300 focus:border-blue-300"
    />
  </div>
</template>

<script>
export default {
  name: "InputApp",
  props: {
    placeholder: { type: String },
    type: { type: String, default: "text" },
    value: { type: String },
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="less">
input {
  outline: none;
}
</style>