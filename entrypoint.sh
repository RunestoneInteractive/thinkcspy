# #!/bin/bash
# set -e

# # Run the build command (if needed) and start the web server
# pretext build web #&& exec pretext view web

# # Start the web server
# pretext view web --port 8128




#!/bin/sh

# Run the pretext build command
pretext build web

# Check if the first command was successful
if [ $? -eq 0 ]; then
  # Run the pretext view command
  pretext view web --port 8128
else
  echo "pretext build web failed"
  exit 1
fi
