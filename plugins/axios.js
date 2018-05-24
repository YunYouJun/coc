import env from '../env'

let TOKEN = 'COC_API_TOKEN'
TOKEN = process.env.NODE_ENV === 'production' ? process.env.PROD_TOKEN : env.LOCAL_TOKEN

export default function ({ $axios, redirect }) {
  $axios.setToken(TOKEN, 'Bearer')
  
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