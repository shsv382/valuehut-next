import type { NextApiRequest, NextApiResponse } from 'next';
import { training, TrainingTypes } from '../../data/training';

type Data = {
  trainings: TrainingTypes[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ trainings: training.training })
}
