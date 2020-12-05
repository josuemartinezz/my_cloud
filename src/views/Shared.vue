<template>
  <div class="home">
    <div class="header">
      <InputApp placeholder="Search Files"
        ><template #icon><i class="bx bx-search"></i></template
      ></InputApp>
    </div>
    <div class="mt-6">
      <span class="font-bold text-gray-400">Shared files</span>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-3">
        <MiniCard v-for="(item, i) in 10" :key="i"
          ><template #icon
            ><i class="bx bxs-folder-minus bx-sm text-gray-400"></i></template
          >Folder {{ i }}</MiniCard
        >
      </div>
    </div>
  </div>
</template>

<script>
import InputApp from "@/components/InputApp";
import MiniCard from "@/components/MiniCard";
export default {
  name: "Home",
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
        content: "Mi shared files from kisscloud",
      },
    ],
  },
};
</script>
