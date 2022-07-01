import type { NextApiRequest, NextApiResponse } from 'next';
import { training as trainingsData, TrainingTypes, StreamTypes } from '../../data/training';

type Data = {
  streams: StreamTypes[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const id = req.query.id;
    const responseTraining: any = trainingsData.training.find(tr => tr.title.toLowerCase().split(" ").join("-") === id)
    responseTraining ?
      res.status(200).json({ 
        streams: responseTraining.streams 
      }) :
      res.status(404)
}
