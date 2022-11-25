<template>
  <div class="footer-container">
    <div class="footer-element social-icons">
      <a href="#"><img src="@/assets/images/youtube.png" alt="youtube-icon" /></a>
      <a href="#"><img src="@/assets/images/linkedin.png" alt="linkedin-icon" /></a>
      <a href="#"><img src="@/assets/images/instagram.png" alt="instagram-icon" /></a>
    </div>
    <div class="footer-element copyright"><p>Design by EsDesigns</p></div>
  </div>
</template>

<script>
export default {
  name: "BaseFooter",
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
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
  .footer-element {
    margin: 0 1rem;

    &.copyright {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  }
  .social-icons {
    a {
        display: flex;
    }
    display: flex;
    align-items: center;
  }
}
</style>
