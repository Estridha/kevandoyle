<script>
import SideBarLink from "./SideBarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
export default {
  props: {},
  components: { SideBarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>
<template>
  <div class="sidebar" :style="{ width: sidebarWidth, backgroundColor: !collapsed ? 'white' : none }">
  <div v-if="!collapsed" class="link-container">
    <SideBarLink to="/work" @click="toggleSidebar">Work</SideBarLink>
    <SideBarLink to="/about" @click="toggleSidebar">About</SideBarLink>
    <SideBarLink to="/contact" @click="toggleSidebar">Contact</SideBarLink>
  </div>
    <span class="menu-icon" @click="toggleSidebar">
      <img v-if="collapsed" src="@/assets/images/menu-collapsed.png" alt="" />
      <img v-else src="@/assets/images/close.png" alt="" />
    </span>
  </div>
</template>
<style>
:root {
  --sidebar-item-hover: #0000001d;
  --sidebar-item-active: #0000003b;
}
</style>
<style scoped>
.sidebar {
  position: fixed;
  /* remove z-index to display social icons in sidebar */
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  transition: 1s ease;
}
.menu-icon {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem 2rem 2rem 0;
  transition: 0.2s linear;
}

.link-container {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
