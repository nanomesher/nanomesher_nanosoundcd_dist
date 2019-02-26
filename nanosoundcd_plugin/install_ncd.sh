#!/bin/bash

cd /home/volumio
rm -f nanosound_cd.zip
rm -rf nanosound_cd
wget https://github.com/nanomesher/nanomesher_nanosoundcd_dist/raw/master/nanosoundcd_plugin/nanosound_cd.zip
mkdir ./nanosound_cd
miniunzip nanosound_cd.zip -d ./nanosound_cd
cd ./nanosound_cd
volumio plugin install

echo "Cleaning up..."
cd /home/volumio
rm -f nanosound_cd.zip
rm -rf nanosound_cd

