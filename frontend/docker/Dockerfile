# Use Node.js 20 as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the built Next.js application
COPY .next ./.next
COPY public ./public

# Expose the port Next.js is running on
EXPOSE 3000

# Run the Next.js application in production mode
CMD ["npm", "start"]