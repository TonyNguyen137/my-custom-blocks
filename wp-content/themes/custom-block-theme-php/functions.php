<?php

$includes = glob(get_template_directory() . '/inc/*.php');

foreach ($includes as $file) {
    require_once $file;
}

function vdump($o)
{
    echo ("<pre>");
    var_dump($o);
    echo ("</pre>");
}
