<template>
  <div class="footer-container">
    <div class="footer-element copyright"><p>Design by EsDesigns</p></div>
    <div class="footer-element social-icons">
      <a href="#"><Icon name="youtube"/></a>
      <a href="#"><Icon name="linkedin"/></a>
      <a href="#"><Icon name="instagram"/></a>
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue';
export default {
  name: "BaseFooter",
  components: {
    Icon,
  },
  /*     props: {
      msg: String
    } */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer-container {
  background-color: rgba(0, 0, 0, 0.119);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;

  @media screen and (max-width: 1025px) {
      justify-content: center;
    }
  .footer-element {
    margin: 0 2.5rem;

    &.copyright {
    @media screen and (max-width: 1025px) {
      display: none;
    }
  }
  }
  .social-icons {
    a {
        display: flex;
        margin: 0.3rem;
    }
    display: flex;
    align-items: center;
  }
}
</style>
