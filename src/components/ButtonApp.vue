<template>
  <button
    v-on="$listeners"
    :class="[load ? 'bg-blue-500' : '']"
    class="relative w-full text-xs font-bold hover:shadow-lg bg-blue-400 p-3 text-white rounded-lg focus:outline-none transition duration-500 hover:bg-blue-500"
  >
    <slot></slot>
    <div
      v-if="load"
      class="absolute bg-blue-500 transition duration-500 top-0 left-0 flex items-center justify-center h-full w-full rounded-lg"
    >
      <i class="bx bx-loader-alt font-bold text-lg bx-spin text-white"></i>
    </div>
  </button>
</template>

<script>
export default {
  name: "ButtonApp",
  props: {
    load: { type: Boolean, default: false },
  },
};
</script>