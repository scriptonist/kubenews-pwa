import NewsServices from '@/services/NewsClientServices'
export default {
  data () {
    return {
      newsData: [],
      date: '',
      month: ''
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
        this.date = this.dateFormat(this.newsData.createdAt)
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
