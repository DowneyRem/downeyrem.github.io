<template>
  <div class="dragon-chat-container">
    <div class="avatar-wrapper">
      <img :src="avatar" :alt="name" class="avatar-img" />
      <div class="avatar-badge">{{ badge }}</div>
    </div>

    <div class="chat-bubble">
      <div class="chat-header">
        <span class="header-icon">{{ icon }}</span>
        <span class="header-name">{{ name }}</span>
      </div>

      <div class="chat-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  avatar: { type: String },
  name: { type: String },
  badge: { type: String }, // 头像右下角图标
  icon: { type: String },  // 名字左侧图标
})
</script>

<style scoped>
.dragon-chat-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px auto;
  max-width: 600px;
  font-family: sans-serif;
}

.avatar-wrapper {
  flex-shrink: 0;
  position: relative;
  width: 200px;
  height: 200px;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  border: 3px solid #5d9b9d;
  object-fit: cover;
  display: block;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.avatar-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 28px;
  background: rgba(255,255,255,0.8);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.chat-bubble {
  position: relative;
  flex: 1;
  min-width: 280px;
  background: rgba(93, 155, 157, 0.08);
  border: 1px solid rgba(93, 155, 157, 0.3);
  border-radius: 20px;
  padding: 20px;
  color: inherit;
  backdrop-filter: blur(4px);
}

.chat-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.header-name {
  font-size: 18px;
  font-weight: bold;
  color: #5d9b9d;
}

.chat-content {
  font-size: 15px;
  line-height: 1.7;
  color: inherit;
}

/* --- 核心修改部分 --- */

/* 1. 全局 slot 里的 strong 仅加粗，颜色继承父级（黑白自适应） */
.chat-content :deep(strong) {
  font-weight: bold;
  color: inherit;
}

/* 2. 专门针对 .quote-area 内部的内容进行颜色渲染 */
.chat-content :deep(.quote-area) {
  margin-top: 8px;
  padding-left: 15px;
  border-left: 2px solid rgba(93, 155, 157, 0.3);
  /* 让 quote-area 里的 strong 变回青色 */
}

.chat-content :deep(.quote-area strong) {
  color: #5d9b9d;
}

/* 3. 链接保持青色以方便识别 */
.chat-content :deep(a) {
  color: #5d9b9d;
  text-decoration: none;
  font-weight: bold;
}

.chat-content :deep(a:hover) {
  text-decoration: underline;
}
</style>