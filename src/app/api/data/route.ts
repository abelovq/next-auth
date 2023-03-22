import { NextApiRequest, NextApiResponse } from "next";
import { mockDb } from "../login/route";
import {Token} from '../login/tokens'

export interface IItem {
  id: number;
  item: string;
  description: string;
}

export const data: IItem[] = [
  { id: 1, item: 'item1', description: 'description item1'},
  { id: 2, item: 'item2', description: 'description item2'},
  { id: 3, item: 'item3', description: 'description item3'},
  { id: 4, item: 'item4', description: 'description item4'},
  { id: 5, item: 'item5', description: 'description item5'}
]

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  
  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
