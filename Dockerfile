FROM dockerfile/nodejs

MAINTAINER Peter Kaleta <mail@peterkaleta.com>

RUN sudo npm install -g gulp bower
RUN sudo apt-get update && sudo apt-get install -y libfreetype6 libfontconfig1

RUN mkdir /web
WORKDIR /web

ADD ./package.json /web/package.json
RUN  npm install

ADD ./bower.json /web/bower.json
RUN bower install --allow-root

VOLUME /web/code
WORKDIR /web/code
