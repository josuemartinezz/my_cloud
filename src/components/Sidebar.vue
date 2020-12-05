<template>
  <div class="sidebar">
    <div class="h-screen w-72 sticky top-0 flex flex-col dark:bg-gray-800">
      <div class="mt-3 p-2">
        <slot name="header"></slot>
      </div>
      <slot></slot>
      <div class="absolute w-full bottom-0 mb-2 p-2 dark:text-white">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
