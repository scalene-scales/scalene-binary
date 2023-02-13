# Scalene Scale's Binary Utilities

This package contains various utilities that Scalene Scale's uses in Scalene Scale's various projects.

NOTE, most people should probably use a more generalized library such as [restructure](https://www.npmjs.com/package/restructure) instead of this library.

# Installing

```
npm install github:scalene-scales/scalene-binary
```

WARN: Because GitHub deprecated the `git://` protocol, please run the following command to use `SSH` instead for installation:

```
git config --global url."ssh://git@".insteadOf git://
```

See https://github.com/npm/cli/issues/4896#issuecomment-1127023942 for more details.

# TODO

Figure out why absolute imports break whne this package is installed as a dependency.
Figure out if there's a way to cleanly change imports from `@scalene-scales/scalene-binary/dist/lib/constants` to `@scalene-scales/scalene-binary/lib/constants`.
