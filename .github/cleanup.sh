#!/bin/bash
set -e

sleep 10

npm install --ignore-scripts --audit false

git config --global user.email "${USER_EMAIL}"
git config --global user.name "${USER_NAME}"
git add package-lock.json
git commit -m "chore(release): update package-lock.json [skip ci]"
git push
