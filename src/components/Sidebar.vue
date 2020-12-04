<template>
  <div class="w-72 sidebar">
    <div class="h-screen flex flex-col">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>