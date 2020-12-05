<template>
  <div class="home">
    <div class="header">
      <InputApp placeholder="Search Files"
        ><template #icon><i class="bx bx-search"></i></template
      ></InputApp>
    </div>
    <div class="mt-6">
      <span class="font-bold text-gray-400">Trash</span>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-3">
        <MiniCard v-for="(item, i) in 8" :key="i"
          ><template #icon
            ><i class="bx bxs-trash-alt bx-sm text-gray-400"></i></template
          >Folder {{ i }}</MiniCard
        >
      </div>
    </div>

    <button
      class="fixed focus:outline-none bottom-0 text-white m-5 cursor-pointer bg-blue-400 right-0 shadow-lg rounded-full h-12 w-12 flex items-center justify-center"
    >
      <i class="bx bx-trash bx-sm"></i>
    </button>
  </div>
</template>

<script>
import InputApp from "@/components/InputApp";
import MiniCard from "@/components/MiniCard";
export default {
  name: "Trash",
  components: {
    InputApp,
    MiniCard,
  },
  metaInfo: {
    titleTemplate: "%s | Home",
    meta: [
      { charset: "utf-8" },
      {
        head: "ssr",
        hid: "description",
        name: "description",
        content: "Delete all files from kisscloud",
      },
    ],
  },
};
</script>
