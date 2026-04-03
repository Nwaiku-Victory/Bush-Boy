SIL (Server Interface Language)
    fss - file system structure
    compile - finishing process
    ports - imports and exports
    combine - the main or index file
    carrier - components repositioning

🧠 How Code Editor Extensions Work (Big Picture)

Most editors support:

Syntax highlighting (coloring keywords)

File recognition (.mylang)

(Later) autocomplete, validation, formatting

You should build in this order:

/////

1️⃣ Decide the Basics of Your Language

You need:

File extension (example: .mml)

Keywords

Comments

Strings

Tags / blocks

Example markup:

@title "Hello"
@bold {
  This is bold
}