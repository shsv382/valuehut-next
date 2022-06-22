// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { content, ContactDataTypes } from '../../data/content';

type Data = {
  offices: ContactDataTypes[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ offices: content.pages.contact.offices })
}
