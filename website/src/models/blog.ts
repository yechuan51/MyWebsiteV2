import mongoose from "mongoose";

interface IBlogEntry {
  title: string;
  content: string;
}

type BlogEntryModel = mongoose.Model<IBlogEntry, {}>;

const blogEntrySchema = new mongoose.Schema<IBlogEntry, BlogEntryModel>({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const mBlogEntry = mongoose.model<IBlogEntry, BlogEntryModel>(
  "BlogEntry",
  blogEntrySchema
);

export default mBlogEntry;
