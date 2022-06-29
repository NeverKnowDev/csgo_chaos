import type { NextApiRequest, NextApiResponse } from 'next';
import { ToggleEffect } from '../../services/effect';
import { getVotes } from '../../services/twitch_votes';

type Data = {
  status: string;
  votes: Array<number>
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ status: 'Done!', votes: getVotes() });
};
