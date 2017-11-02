#!/usr/bin/env bash
# Startup the node server and store the logs in /tmp/hlpr_node_server.log

set -e
set -x
set -o pipefail

echo "hlpr-node-server autostart script"

# Do setup (such as setting env variables?)
. /opt/ros/indigo/setup.sh
. /home/vector/vector_ws/devel/setup.bash

# Start the server
echo "Starting node server"
cd /home/vector/software/hlp_r/hlpr_node_server
/usr/local/bin/npm start > /tmp/hlpr_node_server.log 2>&1
