<script>
import SideBarLink from "./SideBarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import Icon from "../Icon.vue";
export default {
  props: {
  },
  components: { SideBarLink, Icon },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>
<template>
  <div class="sidebar" :style="{ width: sidebarWidth, backgroundColor: !collapsed ? 'white' : '' }">
  <div v-if="!collapsed" class="link-container">
    <SideBarLink to="/work" @click="toggleSidebar">Work</SideBarLink>
    <SideBarLink to="/film" @click="toggleSidebar">Film</SideBarLink>
    <SideBarLink to="/about" @click="toggleSidebar">About</SideBarLink>
    <SideBarLink to="/contact" @click="toggleSidebar">Contact</SideBarLink>
  </div>
    <span class="menu-icon" @click="toggleSidebar">
      <Icon v-if="collapsed" name="icon-menu-collapsed" />
      <Icon v-else name="icon-menu-open"/>
    </span>
  </div>
</template>
<style>
:root {
  --sidebar-item-hover: #0000001d;
  --sidebar-item-active: #0000003b;
}
</style>
<style lang="scss" scoped>
.sidebar {
  position: fixed;
  /* remove z-index to display social icons in sidebar */
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  transition: 1s ease;
  
  @media screen and (min-width: 1025px) {
    display: none;
  }
}
.menu-icon {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2.3rem 2rem 2.3rem 0;
  transition: 0.2s linear;
}

.link-container {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
