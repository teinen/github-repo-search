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
const SEARCH = 'https://api.github.com/search/repositories'

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
    const res = await axios.get(`${SEARCH}?q=vue+in:name&sort=stars`)

    if (res.status !== 200) {
      console.log("error occurred.")
      process.exit()
    }

    const data = await res.data
    this.results = data.items
  }
}
</script>

<style lang="scss">
  body {
    background: #f2f2f2;
  }

  h1 {
    text-align: center;
  }

  .list {

  }
</style>
