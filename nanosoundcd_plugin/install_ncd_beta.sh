#!/bin/bash

cd /home/volumio
rm -f nanosound_cd_beta.zip
rm -rf nanosound_cd
wget https://github.com/nanomesher/nanomesher_nanosoundcd_dist/raw/master/nanosoundcd_plugin/nanosound_cd_beta.zip
mkdir ./nanosound_cd
miniunzip nanosound_cd_beta.zip -d ./nanosound_cd
cd ./nanosound_cd
volumio plugin install

echo "Cleaning up..."
cd /home/volumio
rm -f nanosound_cd_beta.zip
rm -rf nanosound_cd

