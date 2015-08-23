.PHONY: clean build build-server build-client init setup-hooks lint test test-watch start

clean:
	rm -rf ./dist

init:
	make install
	make setup-hooks

make start:
	./scripts/start.sh

install:
	./scripts/install.sh

setup-hooks:
	./scripts/setup-hooks.sh

build:
	make clean
	make build-server
	make build-client

build-server:
	./scripts/build.server.sh

build-client:
	./scripts/build.client.sh

lint:
	./scripts/lint.sh

test:
	./scripts/test.sh

test-watch:
	./scripts/test.watch.sh
