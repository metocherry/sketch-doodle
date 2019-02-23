# Sketch Doodle

## Lerena

A tool for managing JavaScript projects with multiple packages.

- site - https://lernajs.io/
- github - https://github.com/lerna/lerna

**Install**

```bash
npm install --global lerna
```

**Initialize**

```bash
lerna init
```

**Create package**

```bash
leran create [package_name]
```

### Commands

- `lerna init` : Create a new lerna repo or upgrade an existing repo to the current version of Lerna.
  - `--independent / -i` : Use independent versioning mode.
- `lerna bootstrap` : Bootstrap the packages in the current Lerna repo.
- `lerna import [path_to_external_repository]` : Import the package in the local path into packages/<directory-name> with commit history.
- `lerna publish` : Create a new release of the packages that have been updated.
  - `--npm-tag [tagname]` : Publish to npm with the given npm dist-tag (Defaults to latest).
  - `--canary / -c` : Create a canary release.
  - `--skip-git` : Don't run any git commands.
  - `--force-publish [packages]` : Force publish for the specified packages (comma-separated) or all packages using \*
- `lerna changed` : Check which packages have changed since the last release.
- `lerna diff [package]` : Diff all packages or a single package since the last release.
- `lerna run [script]` : Run an npm script in each package that contains that script.
- `lerna ls` : List all of the public packages in the current Lerna repo.
- `lerna add [module_name]`
  - `--hoist`
  - `--scope [package_name]`
  ```javascript
  lerna add karma
  lerna add karma --hoist
  lerna add karma --scope witty-mew-lazyload
  ```

### lerna.json

- `version` : the current version of the repository.
- `npmClient` : an option to specify a specific client to run commands. defaults to 'npm'
- `command.publish.ignoreChanges` : an array of globs that won't be included in `lerna changed/publish`.
- `command.publish.message` : a custom commit message when performing version updates for publication.
- `command.bootstrap.ignore` : an array of globs that won't be bootstrapped when running the `lerna bootstrap command`.
- `command.bootstrap.npmClientArgs` : array of strings that will be passed as arguments directly to npm install during the `lerna bootstrap` command.
- `command.bootstrap.scope` : an array of globs that restricts which packages will be bootstrapped when running the `lerna bootstrap` command.
- `packages` : Array of globs to use as package locations.

## References

- [Monorepo with lerna](http://playnode.io/2017/slides/playnode2017_monorepo_with_lerna.pdf)
