<template>
  <div>
    <h1>Github Repository Search</h1>
    <div class="list">
      <result
        v-for="result in results"
        :key="result.id"
        :result="result"
      ></result>
    </div>
  </div>
</template>

<script>
import Result from './components/Result'

export default {
  data () {
    return {
      results: [
        {
          id: 1,
          url: 'https://github.com/vuejs/vue',
          repo_name: 'vuejs/vue',
          stars: 96725,
          description: 'testtest'
        }
      ]
    }
  },
  components: {
    'result': Result
  }
}
</script>

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>
