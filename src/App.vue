<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <main>
    <div class="wrapper">
      <router-view />
    </div>
  </main>
</template>
