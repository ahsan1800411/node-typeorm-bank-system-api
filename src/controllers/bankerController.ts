import { Request, Response } from 'express';
import { Client } from './../entities/Client';
import { Banker } from './../entities/Banker';
import { BankerDataDto } from 'src/dto/Banker.dto';

export const connectBankerToClient = async (req: Request, res: Response) => {
  const { clientId, bankerId } = req.params;

  const client = await Client.findOne({
    where: {
      id: parseInt(clientId),
    },
  });
  const banker = await Banker.findOne({
    where: {
      id: parseInt(bankerId),
    },
  });

  if (!client) {
    return res.status(404).json({
      msg: 'Client not found',
    });
  }
  if (!banker) {
    return res.status(404).json({
      msg: 'Banker not found',
    });
  }

  // many to many we do only with that entity who have JoinTabe Contsraint
  banker.clients = [client];

  return res.status(201).json({
    msg: 'Banker and Client connected',
  });
};

export const createBanker = async (req: Request, res: Response) => {
  const { first_name, last_name, email, card_number, employee_number } =
    req.body as BankerDataDto;

  const banker = Banker.create({
    card_number,
    email,
    employee_number,
    last_name,
    first_name,
  });

  await banker.save();
  res.status(201).json({
    success: true,
    banker,
  });
};
