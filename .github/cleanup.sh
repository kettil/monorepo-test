#!/bin/bash
set -e

npm install --ignore-scripts --audit false
git add package-lock.json
git commit -m "chore(release): update package-lock.json [skip ci]"
git push
