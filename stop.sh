#!/bin/sh

ps aux | grep run.sh | awk '{print $2}' | xargs kill -9
sudo fuser -k 1337/tcp