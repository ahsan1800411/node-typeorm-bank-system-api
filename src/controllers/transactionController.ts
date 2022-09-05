import { Request, Response } from 'express';
import { Transaction, TransactionType } from '../entities/Transaction';
import { TransactionDataDto } from './../dto/Transaction.dto';
import { Client } from './../entities/Client';

export const createTransaction = async (req: Request, res: Response) => {
  const { amount, type } = req.body as TransactionDataDto;

  const { clientId } = req.params;

  const client = await Client.findOne({
    where: {
      id: parseInt(clientId),
    },
  });

  if (!client) {
    return res.status(404).json({
      msg: 'Client not found',
    });
  }

  const transaction = Transaction.create({
    amount,
    type,
    client,
  });

  await transaction.save();

  if (transaction.type === TransactionType.WITHDRAW) {
    client.balance = client.balance + amount;
  } else {
    client.balance = client.balance - amount;
  }

  return res.status(201).json({
    msg: 'Transaction Successfully Done',
  });
};
