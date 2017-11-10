# HLPR Node Server

This package contains the code for the node.js server that will be on the HLP-R robot. The server uses `express` as the server framework of choice, and uses `express-enrouten` to automatically discover applications that need to be served.

(Under developement, with docs to follow)

## Notes

Default port for ROS Bridge is 9090. Other potential ports: 8000, 8080, 9999.

Expected directory structure of a module:

- `web/` - This should be contained in any ROS package that wants to define the express files that follow. If this is not present, then the following subfolders are assumed to exist in the top-level directory.
- `http/` - This is where the http endpoints live
- `static/ | public/` (in that order) - This is where the static files will be searched and shared
- `ws/` - This is where websocket endpoints are defined
- Everything else, is upto you!

Bee in the bonnet:

- Justin Huang's polymer code does not follow this paradigm. Possible solution: assume that anything that any package with a top-level html or js file contains only static files that must be served.
- Can't use docker because we need the ROS workspace for rosnodejs to work effectivelt. (doh)

Things to consider:

- Endpoint index name should match the name of the app by default. This should be configurable.
- Need to add instructions on how to setup the docker system on vector2

Installing nvm and node globally: [link](http://www.marcominetti.net/personal/blog/2015/09/install-system-wide-node-js-with-nvm-the-painless-way)
