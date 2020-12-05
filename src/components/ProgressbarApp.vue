<template>
  <div class="relative">
    <div class="absolute w-full h-2 rounded-lg bg-gray-300"></div>
    <div
      :style="`width: ${value}%`"
      class="bg-red-400 transition duration-500 absolute z-20 h-2 rounded-lg bg-red-400"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ProgressbarApp",
  props: {
    value: { type: Number },
  },
};
</script>