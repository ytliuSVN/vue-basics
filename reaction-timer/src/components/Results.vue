<template>
  <p>Reaction time - {{ score }} ms</p>
</template>

<script>
export default {
  props: ["score"],
  mounted() {
    console.log(this.score);
  },
};
</script>

<style>
</style>