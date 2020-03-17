FROM balenalib/raspberrypi3-ubuntu-python:3.7.3-build
LABEL maintainer="Dawn Ho <dawn.ho@gmail.com>"

RUN apt-get update && apt-get install -yq \
  git \
  i2c-tools \
  libi2c-dev \
  libraspberrypi-bin \
  python-scipy \
  python-pygame \
  wireless-tools \
  wget && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

COPY scripts/install-rpi-gpio.sh install-rpi-gpio.sh

RUN ./install-rpi-gpio.sh

WORKDIR /usr/src/app

COPY ./requirements.txt /requirements.txt

RUN pip3 install -r /requirements.txt

COPY . ./

ENV INITSYSTEM on

CMD ["bash", "scripts/setup-i2c.sh"]
