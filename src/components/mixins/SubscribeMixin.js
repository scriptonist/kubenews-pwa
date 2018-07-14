import NewsServices from '@/services/NewsClientServices'
export default {
  data () {
    return {
      userEmail: '',
      mssg: ''
    }
  },
  methods: {
    subscribe: async function () {
      await NewsServices.subscribe(this.userEmail).then(response => {
        this.mssg = response.data
      })
    }
  }
}
