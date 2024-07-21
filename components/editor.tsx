"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

export const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    // onEditorContentChange: (editor) => {
    //     onChange(JSON.stringify(editor.topLevelBlocks, null, 2))

    // }
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme == "dark" ? "dark" : "light"}
      />
    </div>
  );
};
