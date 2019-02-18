let TOKEN = process.env.COC_API_TOKEN
export default function ({ $axios, redirect }) {
  $axios.setToken(TOKEN, 'Bearer')
  // $axios.setHeader('Access-Control-Allow-Origin', '*')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}