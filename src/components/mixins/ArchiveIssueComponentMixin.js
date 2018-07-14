import NewsServices from '@/services/NewsClientServices'
export default {
  data () {
    return {
      newsData: [],
      issueData: []
    }
  },
  mounted () {
    this.oneIssue()
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
    oneIssue: async function () {
      let issueDate = localStorage.getItem('issueDate')
      await NewsServices.fetchOneIssue(issueDate).then(response => {
        this.issueData = response.data
      })
    }
    // ----- End -----
  }
}
