import express from 'express';
import cors from 'cors';
import database from './configs/database.config';
import user from './routes/user.route';
import config from './configs/config';
import route from './routes/route';

const app = express();

database
  .connect()
  .then(() => {
    console.log('postgresql database connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('', route);
app.use('/api/users', user);

app.listen(config.port, () => {
  console.log(`server already running on port ${config.port}`);
  console.log(`http://localhost:${config.port}`);
});
