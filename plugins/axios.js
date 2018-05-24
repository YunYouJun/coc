const LOCAL_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijk5MDQ5NzI1LTViZGEtNDk3YS1hNjAwLTRkM2Q4NmFkZWM5MyIsImlhdCI6MTUyNzEyOTgyNywic3ViIjoiZGV2ZWxvcGVyLzBlNmQ4YjRiLTY1YTktMTVlZS0yNTFlLTliYzMxNGFhM2Y0NSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEyNC43Ni4xMDguMzIiXSwidHlwZSI6ImNsaWVudCJ9XX0.VD6oOJANBYZ8L_GW-OyYuIIirHeiLCQwgP6cyRYokJTpnWmH_1oy2ElRlg7TarUe-cOXmZyBhGvTrbCm8zkQpQ'

const PROD_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZjMmJhMGQ0LWIxYzEtNDNkNC05YjhlLWVhYzMxNjE5ZThlYiIsImlhdCI6MTUyNjkwNzU1Nywic3ViIjoiZGV2ZWxvcGVyLzBlNmQ4YjRiLTY1YTktMTVlZS0yNTFlLTliYzMxNGFhM2Y0NSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEzOS4xOTkuMjIuOTAiXSwidHlwZSI6ImNsaWVudCJ9XX0.Ry8xiD2kwW5ATJdHV7UyQUNfe5pKP-zBigi8Ho76DvhZRAhc7uTh3mamfw0O5cRSbd3gV71WKwHc_BDvTyGKIA'

const TOKEN = process.env.NODE_ENV === 'production' ? PROD_TOKEN : LOCAL_TOKEN

export default function ({ $axios, redirect }) {
  console.log(process.env.NODE_ENV, TOKEN)
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