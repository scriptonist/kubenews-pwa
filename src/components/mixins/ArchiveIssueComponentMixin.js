import NewsServices from '@/services/NewsClientServices'
export default {
  data () {
    return {
      newsData: [],
      issueData: [],
      date: ''
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
        this.date = this.dateFormat(this.issueData.createdAt)
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
