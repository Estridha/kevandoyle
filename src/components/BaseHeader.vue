<template>
  <div class="header-container">
    <p>Kevan Doyle</p>
    <div class="navigation-menu">
      <router-link to="/work">Work</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-container {
  color: white;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 2.5rem;
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

.navigation-menu {
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
