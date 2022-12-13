<script>
import BaseFooter from "@/components/BaseFooter.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import BasePage from "@/components/BasePage.vue";
import SideBar from "@/components/sidebar/SideBar.vue";
import { sidebarWidth } from "./components/sidebar/state";
export default {
  components: {
    BaseFooter,
    BasePage,
    BaseHeader,
    SideBar,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<template>
  <BaseHeader v-if="currentRouteName !== 'home'" />
  <SideBar v-if="currentRouteName !== 'home'" />
  <BasePage />
  <BaseFooter v-if="currentRouteName !== 'home'" />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
#app {
  /*  background-image: url(@/assets/images/background.jpg);
  background-size: cover; */
  position: relative;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*,
body {
  display: border-box;
  color: black;
  margin: 0;
  padding: 0;
}
</style>
