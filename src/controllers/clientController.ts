import { Request, Response } from 'express';
import { ClientDataDto } from '../dto/ClientDto';
import { Client } from '../entities/Client';

export const createClient = async (req: Request, res: Response) => {
  const { first_name, last_name, email, balance, card_number } =
    req.body as ClientDataDto;

  const client = Client.create({
    last_name,
    first_name,
    email,
    balance,
    card_number,
  });

  await client.save();
  res.status(201).json({
    success: true,
    client,
  });
};
export const deleteClient = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Client.delete(parseInt(id));

  res.status(200).json({
    success: true,
    msg: 'Client deleted successfully',
  });
};

export const fetchClients = async (req: Request, res: Response) => {
  // to fetch all the clients
  // const client = await Client.find();
  // res.json(client);

  const client = Client.createQueryBuilder()
    .select('client')
    .from(Client, 'client')
    .where('client.id=:id', { id: 4 })
    .getMany();

  res.status(200).json({ client });
};
