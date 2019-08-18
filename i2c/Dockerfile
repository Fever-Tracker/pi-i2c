FROM balenalib/raspberrypi3-debian:jessie
LABEL maintainer="Dawn Ho <dawn.ho@gmail.com>"

RUN apt-get update \
    && apt-get install -y --force-yes \
        apt-utils \
        g++ \
        libudev-dev \
        libyaml-dev \
        libgmp-dev \
        make \
        modprobe \
        python3-dev=3.4.2-2 \
        python3-pip=1.5.6-5 \
         

WORKDIR /usr/src/app

CMD modprobe i2c-dev && python /app/demo.py

