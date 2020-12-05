<template>
  <div class="bg-white dark:hover:bg-gray-600 dark:bg-gray-700 m-1 relative rounded-lg text-sm p-4 cursor-pointer hover:shadow-md transition duration-500">
    <div class="flex items-center">
      <div class="mr-2 mt-1">
        <slot name="icon"></slot>
      </div>
      <div class="font-bold text-gray-400 dark:text-white">
        <slot></slot>
      </div>
    </div>
    <div
      class="absolute dark:text-white text-gray-400 inset-y-0 right-0 flex items-center pr-5 focus:outline-none"
    >
      {{ quantity }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCard",
  props: {
    quantity: { type: Number },
  },
};
</script>