<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useBankAccountStore } from "./stores/bankAccounts";
import HelloWorld from "./components/HelloWorld.vue";
const store = useBankAccountStore();
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Stonix Bank" />
      <h3>Balance: {{ store.balance }}</h3>
      <h3>Pending Balance: {{ store.pendingBalance }}</h3>
      <button @click="store.charge(5)">Buy coffee $5</button>
      <h3>Processed</h3>
      <ul>
        <li v-for="item in store.processedTransactions" :key="item.id">
          ${{ item.amount }}
        </li>
      </ul>

      <h3>Pending</h3>
      <ul>
        <li v-for="item in store.pendingTransactions" :key="item.id">
          ${{ item.amount }}
        </li>
      </ul>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

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

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
