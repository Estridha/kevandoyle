<template>
  <div class="home">
    <h1 class="landing-page-desc">Ready to make your business <br/> look like it deserves</h1>
	<router-link to="/about" @click="toggleMenu"><BaseButton class="secondary" text="About the photographer"/></router-link>
    <div class="video-container">
			<video src="https://traversymedia.com/downloads/video.mov" autoplay muted loop></video>
		</div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'LandingPage',
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>

.landing-page-desc {
  margin-top: 40%;
  margin-bottom: 6rem;
  color: white;
}

.video-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
    z-index: -1;
	overflow: hidden;
	background: var(--primary-color) url('https://traversymedia.com/downloads/cover.jpg') no-repeat center
		center;
}

.video-container video {
	min-width: 100%;
	min-height: 100%;
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	object-fit: cover;
}

.video-container:after {
	content: '';
	z-index: 1;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	position: absolute;
}

img {
  width: 100vw;
}
</style>
