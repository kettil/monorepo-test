#!/bin/bash
set -e

npm install --ignore-scripts --audit false

git config --global user.email "${secrets.CI_USER_EMAIL}"
git config --global user.name "${secrets.CI_USER_NAME}"
git add package-lock.json
git commit -m "chore(release): update package-lock.json [skip ci]"
git push
