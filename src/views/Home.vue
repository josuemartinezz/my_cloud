<template>
  <div class="home">
    <div class="header">
      <InputApp class="sticky top-0" placeholder="Search Files"
        ><template #icon><i class="bx bx-search"></i></template
      ></InputApp>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-3">
        <MiniCard :quantity="12"
          ><template #icon
            ><i class="bx bx-video-recording bx-sm text-red-400"></i></template
          >Videos</MiniCard
        >
        <MiniCard :quantity="4102"
          ><template #icon
            ><i class="bx bxs-image bx-sm text-green-400"></i></template
          >Images</MiniCard
        >
        <MiniCard :quantity="15"
          ><template #icon
            ><i
              class="bx bx-credit-card-front bx-sm text-blue-400"
            ></i></template
          >Documents</MiniCard
        >
        <MiniCard :quantity="98"
          ><template #icon
            ><i
              class="bx bx-dots-horizontal-rounded bx-sm text-purple-400"
            ></i></template
          >Others</MiniCard
        >
      </div>
    </div>
    <div class="mt-6">
      <span class="font-bold text-gray-400">Folders</span>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-3">
        <MiniCard v-for="(item, i) in 18" :key="i"
          ><template #icon
            ><i class="bx bxs-folder-minus bx-sm text-gray-400"></i></template
          >Folder {{ i }}</MiniCard
        >
      </div>
    </div>

    <button
      class="fixed focus:outline-none bottom-0 text-white m-5 cursor-pointer bg-blue-400 right-0 shadow-lg rounded-full h-12 w-12 flex items-center justify-center"
    >
      <i class="bx bx-plus bx-sm"></i>
    </button>
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
        content: "Kisscloud is your perfect cloud",
      },
      {
        head: "ssr",
        hid: "description",
        name: "description",
        content: "My personal files and folders",
      },
    ],
  },
};
</script>
