# Use Node.js 20 as the base image
FROM node:20-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install --production=false

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight Node.js image for the final runtime image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built Next.js application from the builder stage
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/frontend/public ./public
COPY package.json ./
COPY package-lock.json ./

# Install only production dependencies
RUN npm install --production

# Expose the port Next.js is running on
EXPOSE 3000

# Run the Next.js application in production mode
CMD ["npm", "start"]