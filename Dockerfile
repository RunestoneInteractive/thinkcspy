# Use an official Python runtime as a parent image
FROM python:3.11.7-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Install curl for testing purposes
RUN apt-get update && apt-get install -y curl

# Verify pretext installation
RUN pretext --version

# List the contents of the /app directory to ensure files are copied correctly
RUN ls -al /app

# Copy the entrypoint script and set permissions
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Expose the port the app runs on
EXPOSE 8128

# Use the entrypoint script to run the container
ENTRYPOINT ["/app/entrypoint.sh"]
































# # Use an official Python runtime as a parent image
# FROM python:3.11.7-slim

# # Set the working directory in the container
# WORKDIR /app

# # Copy the current directory contents into the container at /app
# COPY . /app

# # Install any needed packages specified in requirements.txt
# RUN pip install --no-cache-dir -r requirements.txt

# # Install Nginx
# RUN apt-get update && apt-get install -y nginx

# # Install curl for testing purposes
# RUN apt-get update && apt-get install -y curl

# # Copy the entrypoint script
# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh

# # Copy Nginx configuration file
# COPY nginx.conf /etc/nginx/nginx.conf

# # Expose ports
# EXPOSE 80 8128

# # Start both Nginx and PreTeXt server
# CMD ["/bin/sh", "-c", "/entrypoint.sh & nginx -g 'daemon off;'"]




































# # Use an official Python runtime as a parent image
# FROM python:3.11.7-slim

# # Set the working directory in the container
# WORKDIR /app

# # Copy the current directory contents into the container at /app
# COPY . /app/

# # Install any needed packages specified in requirements.txt
# RUN pip install --no-cache-dir -r requirements.txt

# # Verify pretext installation
# RUN pretext --version

# # List the contents of the /app directory to ensure files are copied correctly
# RUN ls -al /app

# # List the contents of the PreTeXt project directory if it's different
# RUN ls -al /app/pretext

# # Build the pretext project
# RUN pretext build web

# # Expose the port the app runs on
# EXPOSE 8128

# # Run the pretext view web command to start the web server
# CMD ["pretext", "view", "web"]
