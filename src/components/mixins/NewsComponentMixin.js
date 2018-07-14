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
  methods: {
    goNext: function (paths) {
      if (paths === '/') {
        this.$router.push({path: '/'})
      } else {
        this.$router.push({path: '/' + paths})
      }
    }
  }
}
