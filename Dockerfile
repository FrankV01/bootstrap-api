# Start from the latest LTS (slim, if needed remove -slim) version of Node.js
FROM node:lts-slim

# Set the working directory in the container
WORKDIR /usr/src/app


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Copy the rest of your app's source code to the working directory
COPY . .

# Build the TypeScript project
RUN npm run build

ENV PORT=3000
EXPOSE 3000


CMD [ "node", "dist/app.js" ]
