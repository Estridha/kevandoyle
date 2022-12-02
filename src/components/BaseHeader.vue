<template>
  <div :class="{ change_color: scrollPosition > 50 }" class="header-container">
    <p>Kevan Doyle</p>
    <div class="navigation-menu">
      <router-link to="/commercial">Commercial</router-link>
      <router-link to="/film">Film</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "BaseHeader",
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
      window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-container {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 2.5rem;
  z-index: 1;
  a,
  li {
    color: black;
    margin: 0 1rem;
    text-decoration: none;
  }

  a.router-link-exact-active {
    font-weight: bold;
  }
}

.change_color {
  transition: 2s ease;
  background-color: white;
}

.navigation-menu {
  display: flex;
  align-items: center;
  @media screen and (max-width: 1025px) {
    display: none;
  }
}
</style>
