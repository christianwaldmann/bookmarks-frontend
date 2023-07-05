# build env
FROM node:13.12.0-alpine as build
WORKDIR /App
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# production env
FROM nginx:stable-alpine
COPY --from=build /App/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Initialize environment variables into filesystem
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Add bash
RUN apk add --no-cache bash

# Run script which initializes env vars to fs
RUN chmod +x env.sh

EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
CMD ["/bin/bash", "-c", "./env.sh && nginx -g \"daemon off;\""]

