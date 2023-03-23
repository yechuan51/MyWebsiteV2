import mBlogEntry from "@/models/blog";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Return 200 status and a dummy JSON response.
  if (req.method === "GET") {
    mongoose.connect(process.env.MONGODB_URI as string);
    const blogEntries = await mBlogEntry.find();
    console.log(blogEntries);
    res.status(200).json({ count: blogEntries.length });
  } else if (req.method === "POST") {
    console.log("POST" + req.body);
    mongoose.connect(process.env.MONGODB_URI as string);
    const { title, content } = req.body;
    const newBlogEntry = new mBlogEntry({ title, content });
    await newBlogEntry.save();
    // Return a 201 response
    res.status(201).json({ message: "Blog entry created" });
  }
}
