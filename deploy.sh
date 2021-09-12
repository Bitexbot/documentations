#!/bin/bash
# Token remain valid for 30 days. If something wrong generate new one here
# https://github.com/settings/tokens
set -o allexport; 
source .env; 
set +o allexport;
yarn deploy;
sleep 10m;