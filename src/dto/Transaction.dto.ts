import { TransactionType } from 'src/entities/Transaction';

export interface TransactionDataDto {
  amount: number;
  type: TransactionType;
}
