import { Button } from "@/app/ui/mt/mt";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";

export default function BlogsHomePage() {
  return (
    <>
      <p>Blogs home page WIP.</p>
      <Button className="flex items-center space-x-2">
        <DocumentPlusIcon strokeWidth={2} className="h-5 w-5" />
        <span>New Blog</span>
      </Button>
    </>
  );
}
