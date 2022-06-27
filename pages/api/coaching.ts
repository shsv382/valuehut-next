import type { NextApiRequest, NextApiResponse } from 'next';
import { coaching, CoachingTypes } from '../../data/coaching';

type Data = {
  coaching: CoachingTypes
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ coaching: coaching.coaching })
}