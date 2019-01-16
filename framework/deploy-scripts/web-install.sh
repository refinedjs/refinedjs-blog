#Update local package index
sudo apt-get update

#Install node
sudo apt-get install -y nodejs

#Install npm
sudo apt install -y npm

#Install nginx
sudo apt-get install -y nginx

#Check status of nginx
#systemctl status nginx

#Install curl
sudo apt-get install -y curl

#Install mongo cli
sudo apt install -y mongodb-clients

#Setup nginx conf

#Rename the current file
sudo mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default-old

#Copy in the new file
sudo cp default.conf /etc/nginx/sites-available/default

#Restart nginx
sudo systemctl restart nginx

#Install docker and docker-compose
./docker-install.sh

#Pull web app image from docker registry