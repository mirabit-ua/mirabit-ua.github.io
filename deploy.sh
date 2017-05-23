#!/bin/sh
set -e

GIT_DEPLOY_REPO="${GIT_DEPLOY_REPO:-"$(node -e 'process.stdout.write(require("./package.json").repository)')"}"

if [ "$TRAVIS" = "true" ]
then
  # git need this, on Travis-CI nobody is defined
  git config --global user.name "Travis CI" && \
  git config --global user.email "travis@travis-ci.org"
fi

cd out
rm -rf .git static
cp -rL ../static .
touch .nojekyll
echo 'mirabit.com.ua' > CNAME

git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force "${GIT_DEPLOY_REPO}" master
