import type { NextApiRequest, NextApiResponse } from 'next';
import { ToggleEffect } from './../../services/effect';

type Data = {
  status: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    ToggleEffect(req.body.effect, req.body.status);
  } catch (ex) {
    console.log(ex);
  }
  res.status(200).json({ status: 'Done!' });
};
