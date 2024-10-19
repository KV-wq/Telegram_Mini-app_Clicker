<template>
  <div class="loading_container" v-if="!loaded">
    <img src="./assets/loading.svg" alt="loading" class="loading" />
  </div>
  <main class="game" v-if="loaded">
    <div class="page">
      <RouterView />
    </div>
    <TheMenu />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheMenu from "./components/TheMenu.vue";
import { onMounted, ref } from "vue";
import { useAppStore } from "./stores/pinia";
import { useTelegram } from "./services/telegram";

const urlParams = new URLSearchParams(window.location.search);

const { tg } = useTelegram();

const loaded = ref(false);
const app = useAppStore();

app.init(urlParams.get("ref")).then(() => {
  loaded.value = true;
});

onMounted(() => {
  tg.ready();
  tg.expand();
});
</script>
