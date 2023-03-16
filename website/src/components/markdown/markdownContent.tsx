import ReactMarkdown from "react-markdown";

export type MarkdownContentMetadataType = {
  title: string;
};

export type MarkdownContentPropsType = {
  content: string;
  metadata?: Partial<MarkdownContentMetadataType>;
};

export default function MarkdownContentComp({
  content,
  metadata,
}: MarkdownContentPropsType) {
  return (
    <div>
      {metadata && metadata.title && <h1>{metadata.title}</h1>}
      <ReactMarkdown className="markdown">{content}</ReactMarkdown>
    </div>
  );
}
