#!/usr/bin/env bash
if [ "$TRAVIS_BRANCH" = "seed" ]; then
    GATSBY_EXPLORE_URL=https://dev.commons.ucsc-cgp-dev.org/
elif [ "$TRAVIS_BRANCH" = "develop" ]; then
    GATSBY_EXPLORE_URL=https://dev.commons.ucsc-cgp-dev.org/
elif [ "$TRAVIS_BRANCH" = "integration" ]; then
    GATSBY_EXPLORE_URL=https://dev.commons.ucsc-cgp-dev.org/
elif [ "$TRAVIS_BRANCH" = "staging" ]; then
    GATSBY_EXPLORE_URL=https://dev.commons.ucsc-cgp-dev.org/
else
    GATSBY_EXPLORE_URL=https://dev.commons.ucsc-cgp-dev.org/
fi

export GATSBY_EXPLORE_URL
echo $GATSBY_EXPLORE_URL

gatsby build