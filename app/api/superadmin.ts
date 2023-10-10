// pages/api/superadmins.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createConnection, getRepository } from 'typeorm';
// import { Superadmin } from '../../entities/Superadmin';
import { Superadmin } from '@/entities/Superadmin';

const  api = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const connection = await createConnection();
    const superadminRepository = getRepository(Superadmin);

    if (req.method === 'GET') {
      const superadmins = await superadminRepository.find();
      res.json(superadmins);
    } else if (req.method === 'PUT') {
      const superadmin = superadminRepository.create(req.body);
      await superadminRepository.save(superadmin);
      res.status(201).json(superadmin);
    }

    await connection.close();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default api;
