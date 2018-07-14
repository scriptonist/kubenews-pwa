import NewsServices from '@/services/NewsClientServices'
export default {
  data () {
    return {
      newsData: []
    }
  },
  mounted () {
    this.issue()
  },
  methods: {
    // ----- Method to Route to other components -----
    goNext: function (paths) {
      if (paths === '/') {
        this.$router.push({path: '/'})
      } else {
        this.$router.push({path: '/' + paths})
      }
    },
    // ----- End -----
    // ----- Method to fetch latest issues -----
    issue: async function () {
      await NewsServices.fetchIssue().then(response => {
        this.newsData = response.data
      })
    }
    // ----- End -----
  }
}
