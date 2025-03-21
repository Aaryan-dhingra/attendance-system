#Define the base image of the application
FROM nginx:latest
# Set the working directory
WORKDIR /usr/share/nginx/html
# Copy the web application Files from local to inside the docker image
Copy . /usr/share/nginx/html
# Expose port for the webserver
Expose 81
CMD ["nginx", "-g", "daemon off;"]
