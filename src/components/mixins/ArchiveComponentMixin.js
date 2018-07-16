import NewsServices from '@/services/NewsClientServices'
export default {
  data () {
    return {
      newsData: [],
      date: ''
    }
  },
  mounted () {
    this.archive()
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
    // ----- Method to Store and Go ArchiveIssue Component -----
    goToIssue: function (issue) {
      localStorage.setItem('issueDate', issue)
      this.$router.push({path: '/issue'})
    },
    // ----- End -----
    // ----- Method to fetch all issues -----
    archive: async function () {
      await NewsServices.fetchArchive().then(response => {
        this.newsData = response.data
        for (let i = 0; i < this.newsData.length; i++) {
          let create = this.newsData[i].createdAt
          this.newsData[i].createdAt = this.dateFormat(create)
        }
      })
    },
    // ----- End -----
    // ------ Method to Format Date : July 14, 2018 -----
    dateFormat: function (dateInput) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let dateSplit = dateInput.split('-')
      let monthInt = parseInt(dateSplit[1])
      let dayInt = parseInt(dateSplit[2])
      let yearInt = parseInt(dateSplit[0])
      let month = monthNames[monthInt - 1]
      let finalDate = month + ' ' + dayInt + ',' + ' ' + yearInt
      return finalDate
    }
    // ----- End -----
  }
}
