<template>
  <div class="text-content">
    <h1>Your Friends 🎭</h1>

    <div class="center">
      <button class="referal" @click="copy">{{ referalCode }}</button>
    </div>

    <h3 v-if="friends.length === 0">No friends</h3>

    <ul class="list">
      <li class="list-item" v-for="friend in friends" :key="friend.id">
        {{ friend.name }}

        <span class="list-btn done">150</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useTelegram } from "@/services/telegram";
import { useAppStore } from "@/stores/pinia";
import { computed, ref } from "vue";

const app = useAppStore();
const { user } = useTelegram();

const referalCode = ref("Copy referal code");

const friends = computed(() =>
  Object.keys(app.user.friends).map((id) => ({
    id,
    name: app.user.friends[id],
  }))
);

function copy() {
  navigator.clipboard.writeText(
    "https://t.me/KV_clicker_bot?start=" + user?.id
  );
  referalCode.value = "Copyed 🍄";
}
</script>
