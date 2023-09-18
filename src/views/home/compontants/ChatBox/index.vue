<template>
  <div class="chat">
    <el-scrollbar  height="500px" class="chat-messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message', { 'my-message': message.isMyMessage, 'other-message': !message.isMyMessage }]">
        {{ message.text }}
      </div>
    </el-scrollbar>
    <div class="chat-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
    </div>
  </div>
</template>

<script setup lang="ts" >
import { ref, onMounted } from 'vue';

const newMessage = ref(''); // 使用 ref 来初始化 newMessage
const messages = ref([]);
const ws = ref<WebSocket | null>(null);

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    messages.value.push({ text: newMessage.value, isMyMessage: true });
    if (ws.value) {
      ws.value.send(JSON.stringify({ text: newMessage.value }));
    }
    newMessage.value = '';
  }
};

onMounted(() => {
  ws.value = new WebSocket('ws://localhost:3000');
  
  ws.value.addEventListener('open', (event) => {
    console.log('WebSocket连接已建立', event);
  });

  ws.value.addEventListener('message', (event) => {
    try {
      const receivedMessage = JSON.parse(event.data);
      messages.value.push(receivedMessage);
      console.log('回复消息为:', event.data);
    } catch (error) {
      console.error('Error parsing JSON message:', error);
    }
  });

  ws.value.addEventListener('close', (event) => {
    console.log('WebSocket连接已关闭', event);
  });

  ws.value.addEventListener('error', (event) => {
    console.error('WebSocket连接发生错误', event);
  });
});
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100%;
}

.chat-messages {
  flex: 1;
  padding: 16px;
}

.message {
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
}

.my-message {
  align-self: flex-end;
  background-color: #007bff;
  color: white;
}

.other-message {
  align-self: flex-start;
  background-color: #f0f0f0;
  color: black;
}

.chat-input {
  width: 90%;
  background-color: #f8f9fa;
  color: black;
  transform: translateY(-10px);
  border-radius: 10px;

}

input {
  border-radius: 10px;

  width: 100%;
  padding: 8px;
  border: none;
  /* border-radius: 4px; */
}
</style>
