<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="app-container">
    <div class="sidebar">
      <div class="titleRow">
        <div>
          <img
            src="./assets/images/tractor.png"
            alt="Yellow tractor illustration"
            width="60"
            height="60" />
        </div>
        <div>
          <h1 class="title">dcr.</h1>
        </div>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/collections">Collections</RouterLink>
        <RouterLink to="/rover">Rover</RouterLink>
      </nav>
    </div>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import '@/assets/base.css';

h1 {
  font-family: 'Manrope', sans-serif;
}

.title {
  font-size: 48px;
  margin-left: 8px;
}

.titleRow {
  /* flex: 1; */
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-top: 32px;
}

.app-container {
  width: 100vh;
  height: 100vh;
  overflow: visible;
  display: flex;
}

.sidebar {
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  flex-direction: column;
  width: 30%;
  padding: 1rem 2rem;
  height: 100vh;
  background-color: rgb(251, 251, 250);
  border-right: 1px solid var(--color-border);
}

.main {
  overflow: visible;
  padding: 4rem;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
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
}

nav a:first-of-type {
  border: 0;
}

button {
  margin: 16px 0;
  height: 32px;
  background-color: #edae49;
  color: white;
  border-radius: 32px;
  font-weight: 600;
  box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  padding: 0 16px;
  border-width: 0px;
}

button:hover {
  background-color: #f8a623;
}

@media (min-width: 1024px) {
}
</style>
