#!/usr/bin/env bash
# Startup the node server and store the logs in /tmp/hlpr_node_server.log

set -eu
set -o pipefail

echo "Starting hlpr-node-server"
cd /home/vector/software/hlp_r/hlpr_node_server
npm start
