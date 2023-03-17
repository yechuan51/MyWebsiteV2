// Page for creating a new blog post.

import NormalButton from "@/app/ui/buttons/normalButton";
import { BackwardIcon } from "@heroicons/react/24/outline";

export default function newBlogPage() {
  return (
    <>
      <p>New blog page WIP.</p>
      <NormalButton
        text="Back"
        href="/blogs"
        icon={<BackwardIcon strokeWidth={2} className="h-5 w-5" />}
      />
    </>
  );
}
