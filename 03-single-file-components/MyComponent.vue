<template>
  <div class="greeting">
    {{ msg }}
  </div>
</template>

<!-- Vue CDN 작성했었는데 이제 이거 필요 없음-->
<script setup>
  import { ref } from 'vue'
  const msg = ref('hello')
</script>

<style scoped>
.greeting {
  color: red;
}
</style>