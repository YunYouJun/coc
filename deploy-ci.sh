cd /data/wwwroot/coc.yunyoujun.cn
git checkout master
git pull
npm run build && pm2 restart coc
# pm2 start npm --name "coc" -- run start