/* tslint:disable */
/* eslint-disable */
import { Error } from './error';
export interface EthSendTransaction {
  error?: Error;
  id?: number;
  jsonrpc?: string;
  rawResponse?: string;
  result?: string;
  transactionHash?: string;
}
