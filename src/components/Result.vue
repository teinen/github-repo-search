<template>
  <div class="list-item">
    <div>
      <a :href=result.html_url target="_blank" id="name">
        {{ result.full_name }}
      </a>
      🌟<strong>{{ result.stargazers_count }}</strong>
      🍴<strong>{{ result.forks_count }}</strong>
      👀<strong>{{ result.watchers_count }}</strong>
    </div>
    <p>{{ result.description }}</p>
    <p>
      <a :href=result.homepage target="_blank">
        {{ result.homepage }}
      </a>
    </p>
    <p></p>
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
    &#name {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  .list-item {
    padding: 10px;
    margin: 10px;
    background: white;
    box-shadow: 0 1px 5px rgba(0,0,0,0.5);

    p {
      margin: 3px 0px;
    }
  }
</style>
