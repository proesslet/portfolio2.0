<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <header>
    <nav>
      <div class="logo">Logo</div>
      <div class="menu-toggle" @click="toggleMenu">
        <font-awesome-icon icon="bars" />
      </div>
      <ul :class="{ 'menu-open': isMenuOpen }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--dark-red);
  color: #fff;
}

.logo {
  font-weight: bold;
}

.menu-toggle {
  display: none;
  cursor: pointer;
}

ul {
  display: flex;
  list-style: none;
}

li {
  margin-left: 1rem;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f2f2f2;
    padding: 1rem;
  }

  ul.menu-open {
    display: flex;
  }

  li {
    margin-left: 0;
    margin-bottom: 0.5rem;
  }
}
</style>
