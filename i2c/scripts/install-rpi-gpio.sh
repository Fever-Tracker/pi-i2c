#/bin/bash

wget https://pypi.python.org/packages/source/R/RPi.GPIO/RPi.GPIO-0.5.11.tar.gz
tar -xvf RPi.GPIO-0.5.11.tar.gz
cd RPi.GPIO-0.5.11
python setup.py install
cd ~
sudo rm -rf RPi.GPIO-0.*
