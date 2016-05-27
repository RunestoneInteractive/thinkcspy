#!/bin/sh

runestone build
rm -r ../../static/thinkcspy/
mv build/thinkcspy/ ../../static/