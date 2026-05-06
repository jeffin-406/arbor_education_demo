#!/bin/sh
# Generate a JS file that React can read from the window object
echo "window._env_ = {" > /usr/share/nginx/html/env-config.js
echo "  APP_ENV: \"$APP_ENV\"," >> /usr/share/nginx/html/env-config.js
echo "  APP_NAME: \"$APP_NAME\"," >> /usr/share/nginx/html/env-config.js
echo "  COLOR: \"$COLOR\"," >> /usr/share/nginx/html/env-config.js
echo "  DEBUG: \"$DEBUG\"" >> /usr/share/nginx/html/env-config.js
echo "};" >> /usr/share/nginx/html/env-config.js

exec "$@"
