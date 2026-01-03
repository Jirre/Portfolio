# 1. Build Stage
FROM node:22-alpine AS builder

WORKDIR /app
RUN apk add --no-cache openssl
COPY package*.json ./

RUN npm cache clean --force
RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

# 2. Production Stage
FROM node:22-alpine AS runner

WORKDIR /app
RUN apk add --no-cache openssl

# Copy production dependencies and build files from build stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "run", "start"]