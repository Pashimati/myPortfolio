#!/bin/sh
git checkout main
npm run build
git subtree split --prefix dist -b gh-pages
git subtree push --prefix dist origin gh-pages
git branch -D gh-pages