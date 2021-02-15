FROM node:alpine3.13 as buildImg

RUN mkdir /ng-app
WORKDIR /ng-app

COPY . .

RUN $(npm bin)/ng build --prod --output-path=dist


FROM nginx:1.14.1-alpine

COPY nginx.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=buildImg /ng-app/dist /usr/share/nginx/html

#Uncomment these for https after creating certificates
#RUN mkdir certs
#COPY ./certs/certificate.crt /certs/certificate.crt
#COPY ./certs/certificate.key /certs/certificate.key
#COPY ./certs/dhparam.pem /certs/dhparam.pem
# EXPOSE 443

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]