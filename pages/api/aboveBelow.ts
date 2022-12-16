import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const body = req.body  
  
  let comp = req.body.comparator;
  let above = 0;
  let below = 0;

  //Spec doesn't say what to do if equal, intentionally ignoring case and asking about it
  body.numbers.forEach((num: number) => {
    if(num > comp){
      above++
    } else if (num < comp){
      below++
    }
  }) 

  console.log('a: ', above, ' b: ', below)

  res.status(200).json({ above: above, below: below })
}