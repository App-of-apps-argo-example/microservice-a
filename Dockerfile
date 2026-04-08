FROM node:18-alpine
WORKDIR /app
COPY src/main.js .
EXPOSE 80
CMD ["node", "main.js"]
