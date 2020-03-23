#/bin/bash

touch $SENSOR_LOG_FILE

ln -s ${SENSOR_LOG_FILE} /usr/src/app/public${SENSOR_LOG_FILE}
# ./copy_sensor_data_when_changed.sh

node /usr/src/app/server.js