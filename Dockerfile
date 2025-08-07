# Step 1: Build Vite app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx's web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose a different port, for example, 8081 (since 80 and 443 are excluded)
EXPOSE 8081

# Update Nginx config to serve on port 8081 instead of the default 80
RUN sed -i 's/listen 80;/listen 8081;/' /etc/nginx/conf.d/default.conf

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
