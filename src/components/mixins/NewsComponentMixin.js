import NewsServices from '@/services/NewsClientServices'
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
    this.issue()
  },
  methods: {
    goNext: function (paths) {
      if (paths === '/') {
        this.$router.push({path: '/'})
      } else {
        this.$router.push({path: '/' + paths})
      }
    },
    issue: async function () {
      await NewsServices.fetchIssue().then(response => {
        this.newsData = response.data
      })
    }
  }
}
