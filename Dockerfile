FROM node:14.15-alpine

WORKDIR /app

# Setup node
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# Installing packages
COPY package*.json ./
RUN npm install

# Folders
COPY public ./public
COPY src ./src

# Envs
ENV PORT 8080

# Port to expose
EXPOSE $PORT

CMD ["npm", "run", "start"]
