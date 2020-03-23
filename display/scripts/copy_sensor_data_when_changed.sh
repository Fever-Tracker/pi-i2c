#/bin/bash

### Set initial time of file
LTIME=`stat -c %Z ${SENSOR_LOG_FILE}`

while true
do
   ATIME=`stat -c %Z ${SENSOR_LOG_FILE}`

   if [[ "$ATIME" != "$LTIME" ]]
   then
       cp ${SENSOR_LOG_FILE} /usr/src/app/public${SENSOR_LOG_FILE}
       LTIME=$ATIME
   fi
   sleep 0.05
done