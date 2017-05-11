#!/bin/bash

export LANG=en_US.UTF-8

virtualenv .env
. .env/bin/activate
pip install -r requirements.txt
pip install psycopg2
runestone build --all
