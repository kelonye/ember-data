component = ./node_modules/.bin/component

public: node_modules components $(shell find lib -type f)
	$(component) build -n $@ -o $@
	@touch $@

node_modules:
	@npm install

components:
	@$(component) install

example: public
	@xdg-open example/index.html

clean:
	@rm -rf public

.PHONY: clean example
