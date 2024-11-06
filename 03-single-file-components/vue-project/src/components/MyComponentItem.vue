<template>
  <div>
    <p>MyComponentItem</p>
    <MyComponentItem />
    <MyComponentItem /> <!--재사용 가능해서 이렇게 여러 번 써도 됨-->
  </div>
  <div>
    <a href="">ssafy</a>
  </div>
</template>

<script setup>
import MyComponentItem from '@/components/MyComponentItem.vue';
</script>

<style scoped>

</style>