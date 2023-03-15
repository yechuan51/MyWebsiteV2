import mongoose from "mongoose";

interface IKitty {
  name: string;
}

interface IKittyMethods {
  speak: () => void;
}

type KittyModel = mongoose.Model<IKitty, {}, IKittyMethods>;

// Create a mongoose schema called kitty schema that includes a name field.
const kittySchema = new mongoose.Schema<IKitty, KittyModel, IKittyMethods>({
  name: { type: String, required: true },
});

// Add a speak method to the kittySchema methods.
kittySchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

// Create a mongoose model called Kitty that uses the kittySchema.
const mKitten = mongoose.model<IKitty, KittyModel>("Kitten", kittySchema);

export default mKitten;
