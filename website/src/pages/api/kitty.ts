import mKitten from "@/models/kitty";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

type GetKittenData = {
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetKittenData>
) {
  // Return 200 status and a dummy JSON response.

  if (req.method === "GET") {
    console.log("GET");
    mongoose.connect(process.env.MONGODB_URI as string);

    const kittens = await mKitten.find();
    console.log(kittens);
    res.status(200).json({ count: kittens.length });
  } else if (req.method === "POST") {
    console.log("POST");
    mongoose.connect(process.env.MONGODB_URI as string);

    // Access the name from request.
    const { name } = req.body;
    // If name is not included, default to fluffy.
    const newKitty = new mKitten({ name: name || "fluffy" });

    await newKitty.save();
    newKitty.speak();
  }
}
