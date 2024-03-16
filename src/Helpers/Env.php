<?php

namespace Conconovaloff\XsollaExample\Helpers;

class Env {
    public static function get($name, $default = '') {
        return isset($_ENV[$name]) ? $_ENV[$name] : $default;
    }
}