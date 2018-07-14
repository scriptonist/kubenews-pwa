import NewsServices from '@/services/NewsClientServices'
export default {
  data () {
    return {
      newsData: []
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
    // ----- Method to fetch all issues -----
    archive: async function () {
      await NewsServices.fetchArchive().then(response => {
        this.newsData = response.data
        console.log(response.data)
      })
    }
    // ----- End -----
  }
}
