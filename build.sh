#!/bin/sh

runestone build
rm -rf ../../static/thinkcspy/
cp -R build/thinkcspy /var/public/runestone/static/
