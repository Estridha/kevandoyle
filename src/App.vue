<script>
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu: function (event) {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>

<template>
  <nav>
    <p>Kevan Doyle</p>
    <div class="navigation-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <button class="mobile-menu" v-on:click="toggleMenu">
      <img v-if="!menuIsOpen" src="@/assets/images/menu-collapsed.png" alt="menu-icon" />
      <img v-else src="@/assets/images/close.png"/>
    </button>
  </nav>
  <div v-if="menuIsOpen" class="mobile-menu-open">
    <ul>
      <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
      <li><router-link to="/about" @click="toggleMenu">About</router-link></li>
      <li>
        <router-link to="/contact" @click="toggleMenu">Contact</router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
#app {
  /*  background-image: url(@/assets/images/background.jpg);
  background-size: cover; */
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 30px;
}

nav a,
li a {
  color: black;
  margin: 0 1rem;
  text-decoration: none;
  text-transform: uppercase;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
  padding-top: 2rem;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

button {
  background: transparent;
  border: none !important;
  font-size: 0;
}

.navigation-menu {
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.mobile-menu,
.mobile-menu-open {
  @media screen and (min-width: 768px) {
    display: none;
  }
}

.mobile-menu-open {
  background: white;
  width: 100vw;
  height: auto;
  position: absolute;
  top: 6rem;
  bottom: 0;
}
</style>
