#!/bin/sh

runestone build
rm -rf ../../static/thinkcspy/
sudo cp -R build/thinkcspy /var/public/runestone/static/
sudo chown -R nginx /var/public/runestone/static/thinkcspy
