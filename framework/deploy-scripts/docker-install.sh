#!/bin/bash

echo "Installing docker..."

#Add the GPG key for the official Docker repository to the system
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

#Add the Docker repository to APT sources
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

#Update the package database with the Docker packages from the newly added repo
sudo apt-get update

#Install Docker
sudo apt-get install -y docker-ce

#Check that docker is running
#sudo systemctl status docker

#Add username to docker group
sudo usermod -aG docker ${USER}

#Apply new group
su - ${USER}

#Confirm addition to docker group 
id -nG

#Test docker command without sudo
sudo docker info



echo "Installing docker-compose..."

#Download the latest version of Docker Compose
sudo curl -L https://github.com/docker/compose/releases/download/1.23.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

#Apply executable permissions to the binary
sudo chmod +x /usr/local/bin/docker-compose

#Test installation
docker-compose --version

