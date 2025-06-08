<template>
    <div class="container">
      <!-- Иконки -->
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="icon"
        :style="{
          opacity: icon.visible ? 1 : 0,
          transform: icon.visible ? 'scale(1)' : 'scale(0.5)',
          transition: 'opacity 0.5s, transform 0.5s',
          transitionDelay: icon.delay + 's'
        }"
      >
        {{ icon.label }}
      </div>
  
      <!-- Тексты -->
      <div
        v-for="(text, index) in texts"
        :key="index"
        class="text-block"
        :style="{
          opacity: text.visible ? 1 : 0,
          transform: text.visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s, transform 0.5s',
          transitionDelay: text.delay + 's'
        }"
      >
        {{ text.content }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  // Массив иконок
  const icons = ref([
    { label: 'Иконка 1', visible: false, delay: 10 },
    { label: 'Иконка 2', visible: false, delay: 11 },
    { label: 'Иконка 3', visible: false, delay: 12 },
  ])
  
  // Массив текстов
  const texts = ref([
    { content: 'Текст блок 1', visible: false, delay: 13 },
    { content: 'Текст блок 2', visible: false, delay: 14 },
  ])
  
  onMounted(() => {
    // Запускаем таймеры для появления элементов с задержкой
    icons.value.forEach((icon) => {
      setTimeout(() => {
        icon.visible = true
      }, icon.delay * 1000)
    })
  
    texts.value.forEach((text) => {
      setTimeout(() => {
        text.visible = true
      }, text.delay * 1000)
    })
  })
  </script>
  
  <style scoped>
  /* Анимация заднего фона */
  @keyframes backgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    
    50% {
      background-position: 100% 50%;
    }
    
    100% {
      background-position: 0% 50%;
    }
  }
  
  .container {
    display: flex;
    flex-direction: row; /* выстраиваем в строку */
    align-items: center;
    
  /* Создаем градиентный фон с анимацией */
  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: backgroundGradient 15s ease infinite;
  padding:20px; /* немного отступа для красоты */
  }
  
  .icon {
    width: 100px;
    height:100px;
    background-color:#42a5f5;
    margin:10px;
    
  /* Можно оставить без анимации или добавить свои эффекты */
  display:flex;
  justify-content:center;
  align-items:center;
  }
  
  .text-block {
   margin-left:20px; /* отступ между текстовыми блоками */
  }
  </style>