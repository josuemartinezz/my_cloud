<template>
  <div
    :class="[active ? 'bg-blue-50 text-blue-400' : '']"
    class="bg-white relative text-2xl font-bold text-gray-400 p-2 mr-2 mt-2 ml-2 transition hover:bg-blue-50 duration-300 hover:font-bold rounded-lg flex items-center cursor-pointer hover:text-blue-400"
  >
    <slot name="icon"></slot>
    <div class="ml-2 text-xs">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemSidebar",
  props: {
      active: { type: Boolean, default: false }
  }
};
</script>