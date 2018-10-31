STAGING_BUCKET := s3://dev.commons.ucsc-cgp-dev.org/
INTEGRATION_BUCKET := s3://dev.commons.ucsc-cgp-dev.org/
DEV_BUCKET := s3://dev.commons.ucsc-cgp-dev.org/

.EXPORT_ALL_VARIABLES:

build:
	./build.sh

deploy-staging-travis:
	aws s3 sync --acl public-read public/ $(STAGING_BUCKET) --delete
	aws cloudfront create-invalidation --distribution-id EB0RHFRVO3AA0 --paths "/*"

deploy-integration-travis:
	aws s3 sync --acl public-read public/ $(INTEGRATION_BUCKET) --delete
	aws cloudfront create-invalidation --distribution-id EB0RHFRVO3AA0 --paths "/*"

deploy-dev-travis:
	aws s3 sync --acl public-read public/ $(DEV_BUCKET) --delete
	aws cloudfront create-invalidation --distribution-id EB0RHFRVO3AA0 --paths "/*"
