export default {
  data () {
    return {
      enterButton: false,
      width: 0,
      id: 0
    }
  },
  methods: {
    goNext: function (paths) {
      this.$router.push({path: '/' + paths})
    }
  }
}
