<template>
  <div class="text-content">
    <h1>Your tasks 📃</h1>
    <h3 v-if="app.tasks.length === 0">Loading tasks...</h3>
    <ul class="list">
      <li class="list-item" v-for="task in app.tasks" :key="task.id">
        {{ task.title }}
        <span>
          <a
            @click.prevent="openTask(task)"
            target="_blank"
            class="list-btn"
            :class="{ done: app.user?.tasks?.[task.id] }"
          >
            {{ task.amount }}
          </a>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAppStore } from "@/stores/pinia";
import { useTelegram } from "@/services/telegram";

const { tg } = useTelegram();

const app = useAppStore();

onMounted(() => {
  app.fetchTasks();
});

function openTask(task) {
  app.completeTask(task);
  if (task.url.includes("t.me")) {
    tg.openTelegramLink(task.url);
  } else {
    tg.openLink(task.url);
  }
}
</script>
