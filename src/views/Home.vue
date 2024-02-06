<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="columns-1 p-20">
    <h3 class="text-center m-auto font-light" id="intro-text">
      Hey, I'm Preston Roesslet
    </h3>
    <p id="tagline" class="w-4/12 m-auto text-center mt-1">
      An experienced
      <span class="font-bold"><strong>full-stack developer</strong></span>
      specializing in crafting user-friendly experiences crafted by code, and
      <span class="font-bold">helping developers</span> learn along the way. I
      build apps developers admire, and users adore.
    </p>
  </div>
  <div class="flex justify-center h-80">
    <div class="learn-to-code-intro w-6/12 border-r border-black">
      <h3 class="text-center m-auto font-light underline">
        Want to learn how to code?
      </h3>
      <p class="text-center m-auto font-light w-6/12 mt-8">
        Check back soon and I will have a multitude of tutorials, blogs posts,
        and other helpful tips and tricks for all things tech!
      </p>
    </div>

    <div class="projects-intro w-6/12 border-l border-black">
      <h3 class="text-center m-auto font-light underline">
        Want to check out my work?
      </h3>
      <p class="text-center m-auto font-light w-6/12 mt-8">
        Check out my projects page to see some of the cool things I have been
        working on!
      </p>
    </div>
  </div>
</template>

<style scoped>
#intro-text {
  font-size: 4rem;
  font-style: normal;
}

#tagline {
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 200;
}
</style>
