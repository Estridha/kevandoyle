<script>
import BaseFooter from "@/components/BaseFooter.vue";
import SideBar from "@/components/sidebar/SideBar.vue"
import { sidebarWidth } from "./components/sidebar/state";
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  components: {
    BaseFooter,
    SideBar,
  },
  methods: {
    toggleMenu: function (event) {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
  setup() {
    return { sidebarWidth }
  }
};
</script>

<template>
  <nav>
    <p>Kevan Doyle</p>
    <div class="navigation-menu">
      <router-link to="/work">Work</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
<div class="mobile-sidebar">
  <SideBar/>
</div>
  <content :style="{'margin-left': sidebarWidth}">
    <router-view class="content" />
  </content>
  <footer>
    <BaseFooter />
  </footer>
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

*, body {
  color: black;
  margin: 0;
  padding: 0;
}

nav {
  color: white;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 2.5rem;
  background-color: rgba(0, 0, 0, 0.173);

  a,
  li {
    color: black;
    margin: 0 1rem;
    text-decoration: none;
  }

  a.router-link-exact-active {
    font-weight: bold;
  }

  button {
    background: transparent;
    border: none !important;
    font-size: 0;
    height: min-content;
  }
}

aside {
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    padding-top: 2rem;
    a {
      color: black;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.navigation-menu {
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.mobile-sidebar {
  @media screen and (min-width: 768px) {
    display: none;
  }
}

content {
  padding-bottom: 3rem;
  max-width: 100vw;
  overflow: none;
}


</style>
