import NormalButton from "@/app/ui/buttons/normalButton";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";

export default function BlogsHomePage() {
  return (
    <>
      <p>Blogs home page WIP.</p>
      <NormalButton
        text="New blog"
        href="/blogs/new"
        icon={<DocumentPlusIcon strokeWidth={2} className="h-5 w-5" />}
      />
    </>
  );
}
