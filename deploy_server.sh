ssh -t oignon@ovh1.ec-m.fr screen -X -S node quit
ssh -t oignon@ovh1.ec-m.fr screen -wipe
ssh -t oignon@ovh1.ec-m.fr rm node/index.js node/package.json node/.env node/launch_server.sh
ssh -t oignon@ovh1.ec-m.fr rm -r node/api node/node_modules
scp index.js package.json yarn.lock .env oignon@ovh1.ec-m.fr:node
scp launch_server.sh oignon@ovh1.ec-m.fr:
scp -r api oignon@ovh1.ec-m.fr:node
ssh -t oignon@ovh1.ec-m.fr source launch_server.sh