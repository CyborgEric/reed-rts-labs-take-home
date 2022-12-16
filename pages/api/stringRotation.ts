
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const body = req.body  

  let initString = body.stringToRot;
  let modRotAount  = initString.length - (body.rotateAmount % initString.length)

  let stringRes = initString.slice(modRotAount) + initString.slice(0, modRotAount)  

  res.status(200).json({ stringRes: stringRes })
}