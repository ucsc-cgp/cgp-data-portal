#!/usr/bin/env bash
set -e


export GATSBY_EXPLORE_URL=https://dev.commons.ucsc-cgp-dev.org/explore/
gatsby build

export BUCKET=s3://dev.commons.ucsc-cgp-dev.org/
aws s3 sync --acl public-read public/ $BUCKET --delete --profile ucsc-dev
aws cloudfront create-invalidation --distribution-id EB0RHFRVO3AA0 --paths "/*" --profile ucsc-dev