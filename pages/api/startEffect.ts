import type { NextApiRequest, NextApiResponse } from 'next';
import { ToggleEffect } from './../../services/effect';

type Data = {
  status: boolean;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    ToggleEffect(req.body.effect, req.body.status);
  res.status(200).json({ status: true });
  } catch (ex) {
    console.log(ex);
    res.status(200).json({ status: false });
  }
};
