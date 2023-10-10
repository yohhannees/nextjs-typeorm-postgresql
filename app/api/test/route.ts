
import { Superadmin } from '@/entities/Superadmin';
import { createConnection } from 'typeorm';



async function main() {
  const connection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'muyalogy',
    entities: [__dirname + '/entities/*.ts'],
    synchronize: true,
  });
  console.log('Connected to database');
  const superadminRepository = connection.getRepository(Superadmin);
  const Superadmin = await superadminRepository.find();
  console.log('Users:', Superadmin);
 
}
main().catch((err) => {
  console.error(err);
});
