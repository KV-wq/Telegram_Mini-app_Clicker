<template>
  <div class="game-container">
    <div class="header">
      <img src="../assets/coin.png" alt="coin" />
      <h2 class="score" id="score">{{ store.score }}</h2>
    </div>

    <div class="circle">
      <img @click="increment" ref="img" id="circle" :src="imgSource" />
    </div>

    <ScoreProgress />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ScoreProgress from "@/components/ScoreProgress.vue";
import { useScoreStore } from "@/stores/score";

import m1 from "@/assets/m1.jpeg";
import m2 from "@/assets/m2.jpeg";
import m3 from "@/assets/m3.jpeg";
import m4 from "@/assets/m4.jpeg";
import m5 from "@/assets/m5.jpeg";
import m6 from "@/assets/m6.jpeg";
import m7 from "@/assets/m7.jpg";

const img = ref(null);
const imgSource = computed(() => {
  if (store.score > 1575) {
    return m7;
  }
  if (store.score > 775) {
    return m6;
  }
  if (store.score > 375) {
    return m5;
  }
  if (store.score > 175) {
    return m4;
  }
  if (store.score > 75) {
    return m3;
  }
  if (store.score > 25) {
    return m2;
  }
  return m1;
});

const store = useScoreStore();

function increment(event) {
  store.add(1);
  const rect = event.target.getBoundingClientRect();

  const offfsetX = event.clientX - rect.left - rect.width / 2;
  const offfsetY = event.clientY - rect.top - rect.height / 2;

  const DEG = 40;

  const tiltX = (offfsetY / rect.height) * DEG;
  const tiltY = (offfsetX / rect.width) * -DEG;

  img.value.style.setProperty("--tiltX", `${tiltX}deg`);
  img.value.style.setProperty("--tiltY", `${tiltY}deg`);

  setTimeout(() => {
    img.value.style.setProperty("--tiltX", `0deg`);
    img.value.style.setProperty("--tiltY", `0deg`);
  }, 300);

  const plusOne = document.createElement("div");
  plusOne.classList.add("plus-one");
  plusOne.textContent = "+1";
  plusOne.style.left = `${event.clientX - rect.left}px`;
  plusOne.style.top = `${event.clientY - rect.top}px`;

  img.value.parentElement.appendChild(plusOne);

  setTimeout(() => plusOne.remove(), 2000);
}
</script>
