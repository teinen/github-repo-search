<template>
  <div class="list-item">
    <div>
      <a :href=result.html_url target="_blank">
        {{ result.full_name }}
      </a>
      🌟<strong>{{ result.stargazers_count }}</strong>
      🍴<strong>{{ result.forks_count }}</strong>
    </div>
    <p>{{ result.description }}</p>
    <p>Latest commit: {{ result.pushed_at }}</p>
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
  a {
    font-weight: bold;
  }

  .list-item {
    padding: 10px;
    margin: 10px;
    background: white;
    box-shadow: 0 1px 5px rgba(0,0,0,0.5);
  }
</style>
