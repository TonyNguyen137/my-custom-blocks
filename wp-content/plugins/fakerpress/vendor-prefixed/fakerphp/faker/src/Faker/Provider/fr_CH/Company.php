<?php

namespace FakerPress\ThirdParty\Faker\Provider\fr_CH;

class Company extends \FakerPress\ThirdParty\Faker\Provider\fr_FR\Company
{
    protected static $formats = [
        '{{lastName}} {{companySuffix}}',
        '{{lastName}} {{lastName}} {{companySuffix}}',
        '{{lastName}}',
        '{{lastName}}',
    ];

    protected static $companySuffix = ['AG', 'Sàrl', 'SA', 'GmbH'];
}
