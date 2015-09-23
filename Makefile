TESTS =  $(shell ls -S `find test -type f -name "*.test.js" -print`)
REPORTER = spec
TIMEOUT = 3000
MOCHA_OPTS =

export PATH := node_modules/.bin:$(PATH)
export SHELL := /bin/bash

install:
	@npm install

standard:
	@standard

test: standard
	@NODE_ENV=test mocha \
		--harmony \
		--bail \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		--require should \
		--require co-mocha \
		$(MOCHA_OPTS) \
		$(TESTS)

.PHONY: test
