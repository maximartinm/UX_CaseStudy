FROM php:8.2-apache

# Instalamos dependencias del sistema (git, zip, unzip)
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    && rm -rf /var/lib/apt/lists/*

# Instalamos extensiones de PHP para MySQL
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Instalación de Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

# Instalación de Twig
RUN mkdir -p /usr/local/lib/php && cd /usr/local/lib/php && \
    composer require "twig/twig:^3.0"

# Habilitar mod_rewrite de Apache
RUN a2enmod rewrite