// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: "John Doe" });
// }

const users = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function handler(req: any, res: any) {
  // Get data from your database
  res.status(200).json(users)
}