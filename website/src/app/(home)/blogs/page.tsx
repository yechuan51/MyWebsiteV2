import NormalButton from "@/app/ui/buttons/normalButton";
import { Button } from "@/app/ui/mt/mt";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
