<?php
/*
Plugin Name: Smart Phone Field For WP Forms
Plugin Url: https://pluginscafe.com/plugins/smart-phone-field-for-wpforms
Version: 1.0.0
Description: Instruct visitors to choose country code when entering their mobile number to ensure accurate and correctly formatted data submissions.
Author: KaisarAhmmed
Author URI: https://pluginscafe.com
License: GPLv2 or later
Text Domain: smart-phone-field-for-wp-forms
*/
if (!defined('ABSPATH')) {
    exit;
}

define('WPFORMS_SPF_PATH', plugin_dir_path(__FILE__));
define('WPFORMS_SPF_URL', plugin_dir_url(__FILE__));

class PCafe_Smart_Phone_Field {

    function __construct() {
        add_action('wpforms_loaded', [$this, 'loads_field']);
    }

    public function loads_field() {
        include WPFORMS_SPF_PATH . "includes/field.php";
    }
}

new PCafe_Smart_Phone_Field();
