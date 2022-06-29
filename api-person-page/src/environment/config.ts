import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    jwt: {
      time: process.env.JWT_TIME,
      secret: process.env.JWT_SECRET,
    },
    db: {
      mongo: {
        user: process.env.MONGO_INITDB_ROOT_USERNAME,
        password: process.env.MONGO_INITDB_ROOT_PASSWORD,
        dbName: process.env.MONGO_DB,
        port: parseInt(process.env.MONGO_PORT, 10),
        host: process.env.MONGO_HOST,
        connection: process.env.MONGO_CONNECTION,
      },
    },
  };
});
