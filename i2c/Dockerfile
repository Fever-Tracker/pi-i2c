FROM balenalib/raspberrypi3-ubuntu-python:3.7.3-build
LABEL maintainer="Dawn Ho <dawn.ho@gmail.com>"

RUN apt-get update && apt-get install -yq \
  git \
  i2c-tools \
  libi2c-dev \
  libraspberrypi-bin \
  wireless-tools \
  python3-smbus && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

COPY . ./

ENV INITSYSTEM on

CMD ["bash", "setup-i2c.sh"]
