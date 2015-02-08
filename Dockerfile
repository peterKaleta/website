FROM dockerfile/nodejs

MAINTAINER Peter Kaleta <mail@peterkaleta.com>

RUN npm install -g gulp bower
RUN apt-get update
RUN apt-get install -y ruby-full rubygems-integration
RUN gem install sass
RUN gem install compass

RUN mkdir /web
WORKDIR /web

ADD ./package.json /web/package.json
RUN  npm install

VOLUME /web/code
WORKDIR /web/code
