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

const axios = require('axios')
const SEARCH = 'https://api.github.com/users/teinen/repos'

export default {
  data () {
    return {
      results: []
    }
  },
  components: {
    'result': Result
  },
  async mounted () {
    const res = await axios.get(SEARCH)

    if (res.status !== 200) {
      console.log("error occurred.")
      process.exit()
    }

    const json = res.json()
    const results = json && json.items || []
    this.results = results
  }
}
</script>

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>
