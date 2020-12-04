<template>
  <div id="app" class="flex">
    <Sidebar>
      <ItemSidebar active
        ><template #icon><i class="bx bx-cloud"></i></template> My cloud
      </ItemSidebar>
      <ItemSidebar
        ><template #icon><i class="bx bx-group"></i></template> Shared file
      </ItemSidebar>
      <ItemSidebar
        ><template #icon><i class="bx bx-star"></i></template> Starred
      </ItemSidebar>
      <ItemSidebar
        ><template #icon><i class="bx bx-trash-alt"></i></template> Recycle bin
      </ItemSidebar>
    </Sidebar>
    <div class="cloud-app flex-auto overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import ItemSidebar from "@/components/ItemSidebar";
export default {
  name: "Theme",
  components: {
    Sidebar,
    ItemSidebar,
  },
};
</script>

<style lang="less">
@font-face {
  font-family: Poppins-Regular;
  src: url(https://images.rappi.com/web/Poppins-Regular.eot),
    url(https://images.rappi.com/web/Poppins-Regular.eot#iefix)
      format("embedded-opentype"),
    url(https://images.rappi.com/web/Poppins-Regular.woff2) format("woff2"),
    url(https://images.rappi.com/web/Poppins-Regular.woff) format("woff"),
    url(https://images.rappi.com/web/Poppins-Regular.ttf) format("truetype"),
    url(https://images.rappi.com/web/Poppins-Regular.svg#svgFontName)
      format("svg");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

#app {
  font-family: Poppins-Regular, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
