"use client";

import { unified } from "unified";
import remarkParse from "remark-parse";
import { Node, Element, Text, Editor } from "slate";
import { CustomEditor } from "../slateEditor";

function concatenateNodesWithNewLines(node: Node, parent?: Node): string {
  let result = "";
  const isLastChild =
    parent &&
    Element.isElement(parent) &&
    parent.children[parent.children.length - 1] === node;

  if (Editor.isEditor(node)) {
    node.children.forEach((child) => {
      result += concatenateNodesWithNewLines(child, node);
    });
  } else if (Element.isElement(node)) {
    node.children.forEach((child) => {
      result += concatenateNodesWithNewLines(child, node);
    });
    if (!isLastChild) {
      result += "\n";
    }
  } else if (Text.isText(node)) {
    result += node.text;
    if (!isLastChild) {
      result += "\n";
    }
  }

  return result;
}

function extractMarkdownTitle(markdown: string): string {
  // Combine all node strings with a new line character.
  const ast = unified().use(remarkParse).parse(markdown);
  let title: string | null = null;

  ast.children.forEach((node) => {
    if (node.type === "heading" && node.depth === 1) {
      title = (node.children[0] as any).value;
      return true;
    }
    if (node.type === "paragraph" && !title) {
      console.log(node.children[0]);
      title = (node.children[0] as any).value.split(".")[0];
    }
    return !!title;
  });

  if (!title) {
    title = "Untitled";
  }
  return title;
}

export function extractMarkdown(editor: CustomEditor) {
  // Combine all node strings with a new line character.
  const markdown = concatenateNodesWithNewLines(editor, undefined);
  const title = extractMarkdownTitle(markdown);
  return { title, markdown };
}
