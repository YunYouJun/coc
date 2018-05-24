$TOKEN=$1
export NODE_ENV='production'
export PROD_TOKEN=$TOKEN
cd /data/wwwroot/coc.yunyoujun.cn
git checkout master
git pull
npm run build && pm2 restart coc
# pm2 start npm --name "coc" -- run start