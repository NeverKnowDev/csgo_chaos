import type { NextApiRequest, NextApiResponse } from 'next';
import { ToggleEffect } from '../../services/effect';
import { getVotes, resetVotes } from '../../services/twitch_votes';

type Data = {
  status: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  resetVotes();
  res.status(200).json({ status: 'Done!'});
};
