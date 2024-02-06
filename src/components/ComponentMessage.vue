<template>
  <div v-show="this.message" class="message-container">
    {{ this.message }}
  </div>
</template>
<script>
export default {
  name: 'Message',
  props: {
    message: {
      type: String,
    },
  },
};
</script>
<style scoped>
.message-container {
  position: fixed;
  top: 200px;
  right: 20px;
  background-color: #fcba03;
  color: #fff;
  padding: 10px;
  border-radius: 5px 0 0 0;
}
</style>
