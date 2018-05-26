TOKEN=$1
cd /data/wwwroot/coc.yunyoujun.cn
# git checkout master
git reset --hard
git pull
export NODE_ENV='production'
echo "module.exports = {PROD_TOKEN:'$TOKEN'}" > env.js
yarn && npm run build && pm2 restart coc || pm2 start npm --name "coc" -- run start