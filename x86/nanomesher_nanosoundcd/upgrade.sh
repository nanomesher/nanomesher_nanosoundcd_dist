#!/bin/bash

cd /tmp
wget https://github.com/nanomesher/nanomesher_nanosoundcd_dist/raw/master/packages/nanomesher_nanosoundcd.tar.gz
sudo tar xvf /tmp/nanomesher_nanosoundcd.tar.gz -C /home/volumio/
cd /home/volumio/nanomesher_nanosoundcd
sudo chmod 777 nanosoundcd_progressweb
sudo chmod 777 nanosoundcd_web
sudo chmod 777 upgrade.sh
rm /tmp/nanomesher_nanosoundcd.tar.gz


cd /tmp
wget https://github.com/nanomesher/nanomesher_nanosoundcd_dist/raw/master/nanosoundcd_plugin/nanosound_cd.zip
mkdir -p /home/volumio/nanosound_cd
miniunzip -o /tmp/nanosound_cd.zip -d /home/volumio/nanosound_cd
rm /tmp/nanosound_cd.zip

cp -a /home/volumio/nanosound_cd /data/plugins/music_service/
cd /home/volumio/nanosound_cd


