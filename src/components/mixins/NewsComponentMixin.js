export default {
  data () {
    return {
      enterButton: false,
      width: 0,
      id: 0,
      newsData: [],
      finalNews: [],
      newsCount: 0
    }
  },
  mounted () {
    this.fetchNewsId()
  },
  methods: {
    goNext: function (paths) {
      if (paths === '/') {
        this.$router.push({path: '/'})
      } else {
        this.$router.push({path: '/' + paths})
      }
    },
    fetchNewsId: async function () {
      try {
        await this.axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(response => {
          this.newsData = response.data
          this.newsIdProcess()
        })
      } catch (err) {
        console.log('Error')
      }
    },
    newsIdProcess: function () {
      try {
        for (let i = this.newsCount; i < this.newsData.length; i++) {
          if (this.newsCount % 5 !== 0 || this.newsCount === 0) {
            this.fetchEachNews(this.newsData[i])
            this.newsCount = this.newsCount + 1
          } else {
            this.newsCount = this.newsCount + 1
            break
          }
        }
      } catch (err) {
        console.log('Error')
      }
    },
    fetchEachNews: async function (paramId) {
      try {
        await this.axios.get('https://hacker-news.firebaseio.com/v0/item/' + paramId + '.json').then(response => {
          this.finalNews.push(response.data)
        })
      } catch (err) {
        console.log('Error')
      }
    }
  }
}
