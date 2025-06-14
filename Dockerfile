FROM node:18-alpine as build-stage

WORKDIR /app

RUN apk update \
    && apk add git \
    && git clone https://github.com/AnnQK/plant_shop_static_layout.git . \
    && git pull 

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
