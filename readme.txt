==== EXTERNAL SEARCH BOX qui roxe du poney HOW TO v0.1 ====

== Install ==

1. Clone this repository in /var/www/your_website

2. Modify the content of the "ft_url" parameter in js/configuration.js with your specific FT URL

3. Configure your Apache server (see the following part)

== Fix the "Origin is not allowed by Access-Control-Allow-Origin" problem ==

1. Enable the following modules in your Apache configuration file (/etc/apache2/apache2.conf) if needed

2. Put this in the main section of your configuration by replacing URLs of ProxyPass and ProxyPassReverse with your suggest FT URL :

LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so

ProxyRequests Off
ProxyPreserveHost On

<Proxy *>
    Order deny,allow
    Allow from all
</Proxy>

ProxyPass /suggest http://fluid-dev01.vitry.exploit.anticorp:8080/1/beta/api/search/component-based-contents/suggest
ProxyPassReverse /suggest http://fluid-dev01.vitry.exploit.anticorp:8080/1/beta/api/search/component-based-contents/suggest

<Location /suggest>
    Order allow,deny
    Allow from all
</Location>

3. Restart Apache

== Customize your interface ==

1. Modify HTML structure in index.html

2. Modify suggestions structure in js/configuration.js

3. Modify styles in css/styles.css

