ssh -t oignon@ovh1.ec-m.fr rm www/favicon.ico www/index.html
ssh -t oignon@ovh1.ec-m.fr rm -r www/js www/css
scp client/dist/index.html oignon@ovh1.ec-m.fr:www
scp client/dist/favicon.ico oignon@ovh1.ec-m.fr:www
scp -r client/dist/css oignon@ovh1.ec-m.fr:www
scp -r client/dist/js oignon@ovh1.ec-m.fr:www