import type { NextApiRequest, NextApiResponse } from 'next';
import { consulting, ConsultingTypes, ConsultingObject } from '../../data/consulting';

type Data = {
  consulting: ConsultingTypes
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ consulting: consulting.consulting })
}