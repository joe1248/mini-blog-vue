# Prerequisite : git clone https://github.com/joe1248/mini-blog-vue.git

# 1. build image
# docker build --tag joseph1248/mini-blog-vue-img:latest --tag joseph1248/mini-blog-vue-img:v1.0 .
# 2. create and run detached container from image
# docker run -d -p8080:80 --rm --name blog-fe joseph1248/mini-blog-vue-img:latest
# 3. get inside the container
# winpty docker exec -ti blog-fe sh
# 4. launch the app
# npm run dev   OR # npm run build

# winpty docker login
# docker push joseph1248/mini-blog-vue-img

FROM php:7.2-apache

ENV COMPOSER_ALLOW_SUPERUSER=1

# set maintainer
LABEL maintainer "josephbarban@gmail.com"

# STEP 1 : Update OS, add some tools and nodeJS which includes NPM
RUN apt-get update \
    && apt-get install -y \
    apt-utils \
    # net-tools needed to be able to test network interfaces: netstat -tlnp
    net-tools \
    zip \
    # libzip-dev needed by docker-php-ext-install zip
    libzip-dev \
    unzip \
    git \
    # wget and gnupg need by node.js
    wget \
    gnupg \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y nodejs
	
# STEP 2: Copy NPM files
COPY package*.json ./

# STEP 3: install Front-End dependencies
RUN npm install --ignore-scripts --unsafe-perm

COPY . ./

ENV NODE_ENV development

# copy HTTPD.conf ini file to configure Apache
COPY docker/httpd.conf /etc/apache2/sites-enabled/000-default.conf

RUN npm run build

EXPOSE 80
