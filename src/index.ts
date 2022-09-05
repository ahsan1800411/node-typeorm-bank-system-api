import { DataSource } from 'typeorm';
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/', routes);

const main = new DataSource({
  host: 'localhost',
  database: 'typeorm_crash',
  username: 'postgres',
  password: '1800411',
  type: 'postgres',
  port: 5432,
  entities: ['./src/entities/**/*.ts'],
  synchronize: true,
});

main
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
    app.listen(80, () => console.log('Connected to the database'));
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });
