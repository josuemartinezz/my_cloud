<template>
  <div class="w-full bg-white h-14 flex items-center w-full justify-between sticky top-0 flex z-10">
    <div class="h-full flex items-center w-14">
      <button @click="$emit('click')" class="w-full h-full focus:outline-none pl-5 sm:hidden">
        <i class="bx bx-menu bx-sm"></i>
      </button>
    </div>
    <div class="flex items-center">
      <span class="text-xs mr-4 cursor-pointer">ayalavalencia11@gmail.com</span>
      <div class="overflow-hidden rounded-full mr-5 h-11 bg-red-400 w-11">
        <img
          class="w-full object-cover cursor-pointer"
          src="https://images.unsplash.com/photo-1509668521827-dd7d42a587e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>