import type { NextApiRequest, NextApiResponse } from 'next';
import { ToggleEffect } from './../../services/effect';

type Data = {
  status: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  ToggleEffect(req.body.effect, req.body.status);

  res.status(200).json({ status: 'Done!' });
};
