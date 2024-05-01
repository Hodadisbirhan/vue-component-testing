<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="outer">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/base">Base</RouterLink>
        </nav>
      </div>
    </header>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  width: 8rem;
  background-color: rgb(18, 18, 41);
  bottom: 0;
  padding: 1rem 1rem;
  overflow-y: auto;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.outer {
  width: 100vw;
}

.main {
  margin-left: 8rem;
  width: calc(100%-8rem);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  margin: auto;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-items: center;

    padding: 0;
    margin-top: 1rem;
  }
}
</style>
