const LOCAL_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQzYjBiMWI3LTI2MjQtNDM2My1hYzI0LWE2OGUxMjc0ZjFlNiIsImlhdCI6MTUyNzAzODgyOCwic3ViIjoiZGV2ZWxvcGVyLzBlNmQ4YjRiLTY1YTktMTVlZS0yNTFlLTliYzMxNGFhM2Y0NSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEyNC43Ni4xMDkuMTI3Il0sInR5cGUiOiJjbGllbnQifV19.7sFDuKMuo6U9iQMpBq41bWpcGTT1ubLOEkxTrRicuvKAwDKtv3rtkyoecpA-HjuErXOvy5OwuvpcR9n17LT6uw'

const PROD_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY3OWVlYjg2LTU4YzYtNGI0NS05MDdkLTFlMWQ0Yzg2NmNmMCIsImlhdCI6MTUyNjk1Nzk2OCwic3ViIjoiZGV2ZWxvcGVyLzBlNmQ4YjRiLTY1YTktMTVlZS0yNTFlLTliYzMxNGFhM2Y0NSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4NS4xOTkuMTA4LjE1MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.WhC7KWDSqZIdrVA81oJL0TxFLsqldtolEhCt9fBRsK6S_F8KcflUcXCwGL2zzoh6u54_VUtxIOZ0bgnipzNUaQ'

const TOKEN = process.env.NODE_ENV == 'production' ? PROD_TOKEN : LOCAL_TOKEN

export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // this.setToken(TOKEN, 'Bearer')
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}