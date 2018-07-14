import NewsServices from '@/services/NewsClientServices'
export default {
  data () {
    return {
      userEmail: '',
      mssg: ''
    }
  },
  methods: {
    // ----- Method to Subscribe -----
    subscribe: async function (e) {
      await NewsServices.subscribe(this.userEmail).then(response => {
        this.mssg = 'Thank you for subscribing :)'
        this.userEmail = ''
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
