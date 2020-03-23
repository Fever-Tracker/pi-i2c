#/bin/bash

### Set initial time of file
LTIME=`stat -f %m /tmp/data/ir_sensor.json`

while true
do
   ATIME=`stat -f %m /tmp/data/ir_sensor.json`

   if [[ "$ATIME" != "$LTIME" ]]
   then
       cp /tmp/data/ir_sensor.json /Users/dawn/Projects/FeverTracker/pi-i2c/display/public/data/ir_sensor.json
       LTIME=$ATIME
   fi
   sleep 0.2
done