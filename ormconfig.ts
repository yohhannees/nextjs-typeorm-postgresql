// ormconfig.ts
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'etata30',
  database: 'muyalogy',
  synchronize: true, 
  entities: ['/entities/**/*.ts'],
  migrations: ['/migrations/**/*.ts'],
  subscribers: ['/subscribers/**/*.ts'],
  cli: {
    entitiesDir: '/entities',
    migrationsDir: '/migrations',
    subscribersDir: '/subscribers',
  },
};

export default config;


