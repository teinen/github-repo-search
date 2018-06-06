<template>
  <div class="content">
    <div>
      <a :href=result.url target="_blank">
        {{ result.repo_name }}
      </a>
      🌟<strong>{{ result.stars }}</strong>
    </div>
    <p>{{ result.description }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'result'
  ]
}
</script>

<style lang="scss">
  .content {
    width: 50%;
    padding: 10;
    margin: 10;
    background: white;
    box-shadow: 0 1px 5px rgba(0,0,0,0.5);
  }
</style>
