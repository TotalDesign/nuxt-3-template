# Arguments
ARG NODE_VERSION=20
ARG PLATFORM=linux/amd64

################################################################################

# Stage 1: Build
FROM --platform=${PLATFORM} node:${NODE_VERSION}-slim AS build

## Install modules
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force

## Copy application file
COPY . ./

## Build
RUN npm run build

################################################################################

# Stage 2: Production image
FROM --platform=${PLATFORM} node:${NODE_VERSION}-slim AS prod

## Configure environment
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

ARG PORT=3000
ENV PORT=$PORT

## Copy relevant files
WORKDIR /app
COPY --from=build /app/.output /app/.output

## Security: set user
RUN chown -R node:node /app
USER node

## Run Nuxt
EXPOSE ${PORT}
CMD ["node", ".output/server/index.mjs"]
