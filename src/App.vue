<template>
  <nav>
    <p>Kevan Doyle</p>
    <div class="navigation-menu">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
#app {
 /*  background-image: url(@/assets/images/background.jpg);
  background-size: cover; */
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 30px;
}

nav a {
  color: black;
  margin: 0 1rem;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

.navigation-menu {
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
