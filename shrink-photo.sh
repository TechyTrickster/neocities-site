#!/bin/sh

ffmpeg -i "$1" -lavfi scale=800:-1 -y "$2"
tycat "$2"
du -h "$2"