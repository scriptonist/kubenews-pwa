import NewsServices from '@/services/NewsClientServices'
export default {
  data () {
    return {
      email: '',
      url: '',
      title: '',
      name: '',
      mssg: ''
    }
  },
  methods: {
    // ----- Route Other Component -----
    goNext: function (paths) {
      if (paths === '/') {
        this.$router.push({path: '/'})
      } else {
        this.$router.push({path: '/' + paths})
      }
    },
    // ----- End -----
    // ----- Method to Submit Story -----
    submitStory: async function (e) {
      await NewsServices.submitStory({
        author: this.name,
        url: this.url,
        title: this.title,
        description: this.email
      }).then(response => {
        this.mssg = 'Story submitted successfully :)'
        this.author = ''
        this.email = ''
        this.url = ''
        this.title = ''
        this.description = ''
        this.name = ''
        this.snack()
        e.preventDefault()
      })
    },
    // ----- End -----
    // ----- Method For Displaying Toast -----
    snack: function () {
      var x = document.getElementById('snackbar')
      x.className = 'show'
      setTimeout(function () {
        x.className = x.className.replace('show', '')
      }, 3000)
    }
    // ----- End -----
  }
}
