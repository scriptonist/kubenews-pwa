export default {
  data () {
    return {
      enterButton: false,
      width: 0,
      id: 0
    }
  },
  mounted () {
    this.move()
  },
  methods: {
    move: function () {
      this.width = 1
      this.id = setInterval(this.frame, 15)
    },
    frame: function () {
      let elem = document.getElementById('myBar')
      if (this.width >= 100) {
        clearInterval(this.id)
        this.goNext('news')
      } else {
        this.width++
        elem.style.width = this.width + '%'
      }
    },
    goNext: function (paths) {
      this.$router.push({path: '/' + paths})
    }
  }
}
