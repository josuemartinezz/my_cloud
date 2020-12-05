<template>
  <div
    id="app"
    v-touch:swipe.right="openNavigation"
    class="flex max-w-screen-2xl m-auto h-screen"
  >
    <Sidebar
      v-if="$route.name != 'Login' && $route.name != 'Register'"
      class="hidden sm:inline"
    >
      <template #header>
        <div class="w-20 flex items-center">
          <img
            class="object-cover"
            src="@/assets/Logo_transparent.png"
            alt=""
          />
          <span class="font-bold text-blue-400">Kisscloud</span>
        </div>
      </template>
      <ItemSidebar :active="$route.name == 'Home'" to="/"
        ><template #icon><i class="bx bx-cloud"></i></template> My cloud
      </ItemSidebar>
      <ItemSidebar :active="$route.name == 'Shared'" to="/shared"
        ><template #icon><i class="bx bx-group"></i></template> Shared file
      </ItemSidebar>
      <ItemSidebar :active="$route.name == 'Starred'" to="/starred"
        ><template #icon><i class="bx bx-star"></i></template> Starred
      </ItemSidebar>
      <ItemSidebar :active="$route.name == 'Trash'" to="/trash"
        ><template #icon><i class="bx bx-trash-alt"></i></template> Recycle bin
      </ItemSidebar>
      <template #footer>
        <span class="text-gray-600 dark:text-white"
          >25.32 GB <span class="text-xs">used</span></span
        >
        <div class="text-xs text-gray-600 mb-2 dark:text-white">79% used - 1.2 GB free</div>
        <ProgressbarApp :value="v" />
        <ButtonApp class="mt-5">Go premium</ButtonApp>
      </template>
    </Sidebar>
    <transition name="slide-fade">
      <SidebarMovil
        v-touch:swipe.left="openNavigation"
        @click="showSidebar = !showSidebar"
        v-if="showSidebar"
        class="movil z-50 sm:hidden lg:hidden"
      >
        <template #header>
          <div class="w-20 flex items-center">
            <img
              class="object-cover"
              src="@/assets/Logo_transparent.png"
              alt=""
            />
            <span class="font-bold text-blue-400">Kisscloud</span>
          </div>
        </template>
        <ItemSidebar
          @click="showSidebar = !showSidebar"
          :active="$route.name == 'Home'"
          to="/"
          ><template #icon><i class="bx bx-cloud"></i></template> My cloud
        </ItemSidebar>
        <ItemSidebar
          @click="showSidebar = !showSidebar"
          :active="$route.name == 'Shared'"
          to="/shared"
          ><template #icon><i class="bx bx-group"></i></template> Shared file
        </ItemSidebar>
        <ItemSidebar
          @click="showSidebar = !showSidebar"
          :active="$route.name == 'Starred'"
          to="/starred"
          ><template #icon><i class="bx bx-star"></i></template> Starred
        </ItemSidebar>
        <ItemSidebar
          @click="showSidebar = !showSidebar"
          :active="$route.name == 'Trash'"
          to="/trash"
          ><template #icon><i class="bx bx-trash-alt"></i></template> Recycle
          bin
        </ItemSidebar>
        <template #footer>
          <span class="text-gray-600 dark:text-white"
            >25.32 GB<span class="text-xs dark:text-white">used</span></span
          >
          <div class="text-xs text-gray-600 mb-2 dark:text-white">79% used - 1.2 GB free</div>
          <ProgressbarApp :value="v" />
          <ButtonApp class="mt-5">Go premium</ButtonApp>
        </template>
      </SidebarMovil>
    </transition>
    <div
      class="cloud-app flex-auto overflow-auto dark:bg-gray-800"
    >
      <transition name="fade">
        <div
          @click="showSidebar = !showSidebar"
          v-if="showSidebar"
          class="w-full h-screen a bg-black fixed z-30"
        ></div>
      </transition>
      <Navbar
        v-if="$route.name != 'Login' && $route.name != 'Register'"
        @click="showSidebar = !showSidebar"
      ></Navbar>
      <router-view class="p-5" />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import ItemSidebar from "@/components/ItemSidebar";
import ProgressbarApp from "@/components/ProgressbarApp";
import ButtonApp from "@/components/ButtonApp";
import Navbar from "@/components/Navbar";
import SidebarMovil from "@/components/Movil/SidebarMovil";

export default {
  name: "Theme",
  data() {
    return {
      v: 79,
      showSidebar: false,
    };
  },
  components: {
    Sidebar,
    ItemSidebar,
    ProgressbarApp,
    ButtonApp,
    Navbar,
    SidebarMovil,
  },
  methods: {
    openNavigation() {
      this.showSidebar = !this.showSidebar;
    },
  },
  metaInfo: {
    title: "Kisscloud",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    meta: [
      { charset: "utf-8" },
      {
        head: "ssr",
        hid: "keywords",
        name: "keywords",
        content:
          "Servicio en la nuve, cloud, kisscloud, mr.josue, servicio en la nube el salvador, cloud el salvador, servicio de google cloud, kisscloud el salvador, mr.josue cloud, kisscloud el salvador",
      },
      {
        head: "ssr",
        hid: "og:title",
        name: "og:title",
        content: "kisscloud | your perfect cloud",
      },
    ],
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
.cloud-app{
  background-color: #f6f9ff
}
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
}
.a {
  opacity: 0.5;
}
#app {
  font-family: Poppins-Regular, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-500px);
  /* opacity: 0; */
}
</style>

