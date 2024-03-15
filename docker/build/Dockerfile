FROM php:8.2-fpm

# xdebug
RUN pecl install xdebug && docker-php-ext-enable xdebug

WORKDIR /app/xsolla-zero-game/public

CMD php -S 0.0.0.0:8080 index.php