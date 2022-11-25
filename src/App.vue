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
  methods: {
    /*     isOnLangingPage: function (event) {
       return this.$router.currentRoute.value.name === 'home';
    }, */
  },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<template>
  <BaseHeader />
  <SideBar />
  <BasePage />
  <BaseFooter />
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
  color: black;
  margin: 0;
  padding: 0;
}
</style>
