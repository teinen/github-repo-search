<template>
  <div class="container">
    <h1>Github Repository Search</h1>
    <div class="search">
      <input class="form-control" type="text" placeholder="Search" v-model="search">
      <p>{{ condition }}</p>
    </div>
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
const lodash = require('lodash')

const SEARCH = 'https://api.github.com/search/repositories'

export default {
  data () {
    return {
      search: '',
      condition: 'Not searching.',
      results: []
    }
  },
  components: {
    'result': Result
  },
  watch: {
    search () {
      this.condition = 'Waiting for you stop typing...'
      this.debouncedGetResults()
    }
  },
  created () {
    this.debouncedGetResults = _.debounce(this.getResults, 500)
  },
  methods: {
    getResults () {
      if (this.search === '') {
        this.condition = 'Please enter search words :)'
        return
      }

      this.condition = 'Searching...'

      axios.get(`${SEARCH}?q=${this.search}+in:name&sort=stars`)
        .then((res) => {
          this.results = res.data.items
          this.condition = 'Search finished!'
        })
        .catch((err) => {
          this.condition = 'Error occurred: ' + err
        })
    }
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

  .search {
    text-align: center;

    input {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 8px;
    }

    p {
      font-size: 1.2rem;
    }
  }

  .form-control {
    width: 350px;
  }
</style>
