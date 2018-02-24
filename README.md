# babel-upgrade-issue-17

After running `npm install`, to repro:
```
$ ./node_modules/.bin/webpack

Hash: a9fb8f88c6cebfe91bfe
Version: webpack 1.15.0
Time: 324ms
    + 1 hidden modules

ERROR in ./src/index.js
Module build failed: TypeError: fileSystem.statSync is not a function
    at module.exports (/nail/home/avohra/packages/temp/node_modules/babel-loader/lib/utils/exists.js:7:25)
    at find (/nail/home/avohra/packages/temp/node_modules/babel-loader/lib/resolve-rc.js:13:9)
    at Object.module.exports (/nail/home/avohra/packages/temp/node_modules/babel-loader/lib/index.js:113:132)
```
Downgrading `babel-loader` to 7.1.1 fixes the issue:
```
$ ./node_modules/.bin/webpack

Hash: c87d7c1e5c41b3bc1a1d
Version: webpack 1.15.0
Time: 412ms
    Asset     Size  Chunks             Chunk Names
output.js  1.62 kB       0  [emitted]  main
    + 2 hidden modules
```
