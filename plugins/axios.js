const LOCAL_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQzYjBiMWI3LTI2MjQtNDM2My1hYzI0LWE2OGUxMjc0ZjFlNiIsImlhdCI6MTUyNzAzODgyOCwic3ViIjoiZGV2ZWxvcGVyLzBlNmQ4YjRiLTY1YTktMTVlZS0yNTFlLTliYzMxNGFhM2Y0NSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEyNC43Ni4xMDkuMTI3Il0sInR5cGUiOiJjbGllbnQifV19.7sFDuKMuo6U9iQMpBq41bWpcGTT1ubLOEkxTrRicuvKAwDKtv3rtkyoecpA-HjuErXOvy5OwuvpcR9n17LT6uw'

const PROD_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZjMmJhMGQ0LWIxYzEtNDNkNC05YjhlLWVhYzMxNjE5ZThlYiIsImlhdCI6MTUyNjkwNzU1Nywic3ViIjoiZGV2ZWxvcGVyLzBlNmQ4YjRiLTY1YTktMTVlZS0yNTFlLTliYzMxNGFhM2Y0NSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEzOS4xOTkuMjIuOTAiXSwidHlwZSI6ImNsaWVudCJ9XX0.Ry8xiD2kwW5ATJdHV7UyQUNfe5pKP-zBigi8Ho76DvhZRAhc7uTh3mamfw0O5cRSbd3gV71WKwHc_BDvTyGKIA'

const TOKEN = process.env.NODE_ENV === 'production' ? PROD_TOKEN : LOCAL_TOKEN

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