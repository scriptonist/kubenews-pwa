import Api from '@/services/Api.js'

export default {
  // ----- Fetch Daily Issue -----
  fetchIssue () {
    return Api().get('/issue')
  },
  // ----- End -----
  // ----- Fetch Issue Archive -----
  fetchArchive () {
    return Api().get()
  },
  // ----- End -----
  // ----- Fetch Particular Issue -----
  fetchOneIssue () {
    return Api().get()
  },
  // ----- End -----
  // ----- Email Subscription -----
  subscribe (userData) {
    return Api().post('/subscribe?email=' + userData)
  },
  // ----- End -----
  // ----- Submit User Story -----
  submitStory (userData) {
    return Api().post('/story', userData)
  }
  // ----- End -----
}
