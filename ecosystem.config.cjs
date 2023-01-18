module.exports = {
  apps: [
    {
      name: "1",
      script: "./src/index.js",
      watch: true,
      autorestart: true,
      args: "--port=8082",
    },
    {
      name: "2",
      script: "./src/index.js",
      watch: true,
      autorestart: true,
      args: "--port=8083 ",
    },
    {
      name: "3",
      script: "./src/index.js",
      watch: true,
      autorestart: true,
      args: "--port=8084",
    },
    {
      name: "4",
      script: "./src/index.js",
      watch: true,
      autorestart: true,
      args: "--port=8085",
    },
  ],
};