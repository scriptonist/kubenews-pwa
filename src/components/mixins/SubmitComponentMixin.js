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
    goNext: function (paths) {
      if (paths === '/') {
        this.$router.push({path: '/'})
      } else {
        this.$router.push({path: '/' + paths})
      }
    },
    submitStory: async function (e) {
      await NewsServices.submitStory({
        author: this.name,
        url: this.url,
        title: this.title,
        description: this.email
      }).then(response => {
        this.mssg = response.data
        this.author = ''
        this.email = ''
        this.url = ''
        this.title = ''
        this.description = ''
        this.name = ''
        e.preventDefault()
      })
    }
  }
}
