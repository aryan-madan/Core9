"use client";

import Editor from "@monaco-editor/react";

export function NotepadApp() {
  return (
    <Editor
      height="100%"
      defaultLanguage="markdown"
      defaultValue="# New Note\n\nStart typing…"
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        wordWrap: "on",
        lineNumbers: "off",
        scrollBeyondLastLine: false,
        padding: { top: 12 },
        overviewRulerBorder: false,
      }}
      beforeMount={(monaco) => {
        monaco.editor.defineTheme("core9", {
          base: "vs-dark",
          inherit: true,
          rules: [],
          colors: {
            "editor.background": "#18181b",
          },
        });
      }}
      onMount={(editor, monaco) => {
        monaco.editor.setTheme("core9");
      }}
    />
  );
}