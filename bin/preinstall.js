// Taken from https://strongloop.com/strongblog/modular-node-js-express/
// Visit all the apps folders and install their dependencies

var fs = require('fs');
var resolve = require('path').resolve;
var join = require('path').join;
var cp = require('child_process');

// get library path
var apps = resolve(__dirname, '../apps/');

fs.readdirSync(apps)
  .forEach(function (mod) {
    var modPath = join(apps, mod)

    // ensure path has package.json
    if (!fs.existsSync(join(modPath, 'package.json'))) return

    // install folder
    cp.spawn('npm', ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' })
  });
