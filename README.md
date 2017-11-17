# HLPR Node Server

An extensible (not yet, but soon!) node server module for the HLP-R platform.

## Installing

Install node. I recommend nvm. Using the instructions at [link](http://www.marcominetti.net/personal/blog/2015/09/install-system-wide-node-js-with-nvm-the-painless-way):

```
# get super powers
sudo -i

# fetch and execute nvm setup script (you need to be connected to the internet)
curl https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | NVM_DIR=/usr/local/nvm PROFILE=/etc/bash.bashrc bash

# Install node and set a default version
nvm install 6.0
nvm alias default 6.0

# Create global nvm and npm executables
echo "#\!/bin/bash
export NVM_DIR=\"/usr/local/nvm\"
[ -s \"\$NVM_DIR/nvm.sh\" ] && . \"\$NVM_DIR/nvm.sh\"
node \$@" > /usr/local/bin/node
chmod +x /usr/local/bin/node

echo "#\!/bin/bash
export NVM_DIR=\"/usr/local/nvm\"
[ -s \"\$NVM_DIR/nvm.sh\" ] && . \"\$NVM_DIR/nvm.sh\"
npm \$@" > /usr/local/bin/npm
chmod +x /usr/local/bin/npm
```

Get this package and put `hlpr_web_teleop` in the `apps` directory. Then install the required `node_modules`.

```
git clone <hlpr_node_server>
git clone <hlpr_web_teleop>
ln -s hlpr_web_teleop hlpr_node_server/apps/

cd hlpr_node_server
npm install .
```

Run the server:

```
# In the hlpr_node_server directory
npm start
```

(In debug mode):

```
# In the hlpr_node_server directory
npm run debug
```

To setup the server to automatically start on boot on the robot, use `crontab` and point cron to the `bin/startup.sh` script. You might have to use the full path.

## Future

As you might've noticed, this package is not at all extensible yet. Here's the timeline I have in mind for developing the API of this server:

- v0.1: Current version where everything is tied directly to `hlpr_web_teleop`.
- v0.2: Introduce the concept of `hlpr.json` which can be used to define:
	- `ros`: factory modules to enable the ROS interface for a node submodule
	- `routes`: factory modules to define express routes
	- `static`: folders that should be served statically. These should allow easy interface with other packages such as Justin Huang's [ros-webcomponents](https://www.webcomponents.org/author/jstnhuang).
	- `ws`: factory modules to enable websockets endpoints
- v0.3: Automatic building of static files and javascript based on build instructions in `package.json`.
- v0.4/v1.0: Automatic fall back to serving static files if there is no `hlpr.json`.
