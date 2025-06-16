<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '{4?gRJOS4JKd<`t/U/FtEU/v|<=VI`1(~5^{KIm7ni4Opa7AqSb#%Sj=y7,R7Owq' );
define( 'SECURE_AUTH_KEY',   'jPjjKu$)4$?,)YM(N5wOS7#y2}d`fxEQf +U<cS:[YdI(hjuN6GrC>l`9WKS)H9K' );
define( 'LOGGED_IN_KEY',     'P^/hhAK^bTbsBGh>2/}(M~5)Y }<X$!Fs>TpFNHZ,/u($J/!vY!wstX2uWk<+A }' );
define( 'NONCE_KEY',         'KgI|+6p2,_M:rG`gmGCm!{#25xE=H7VKeUH*H8IRGs#1^UKD}S!bLZDVe:6_pa (' );
define( 'AUTH_SALT',         'ZUa-eEE?,l4?Op83//>=U_:Kc:[LX&jd!B9.^.`{6%=IB#4Py/_T@>ya4P(6f)Zi' );
define( 'SECURE_AUTH_SALT',  '_d&r j[fI NJkk:7a<~CEOc![&|B1TAUl)WI6#1*A25]W>9*w^d{h0P`Y1Oi@K||' );
define( 'LOGGED_IN_SALT',    'Cw/@/z2e [AabM~?@eb8Lx%;Iu+SRGBGsiShl9>f/vyX+Ufi[e7iL_4|*xX@=@0z' );
define( 'NONCE_SALT',        '4$<Hl%S_bmd1-BkmkmiIqo$z.ymcR,1@8:7ftm4Q _}pY~ltg:Ep2qd%Q:fQNW0d' );
define( 'WP_CACHE_KEY_SALT', 'n~32Q6NmtmP#W{ Jx!C(:  0!X.Yd4(GaaH+an5[.W?bW|jaVGuLj11l^&d+8:34' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
