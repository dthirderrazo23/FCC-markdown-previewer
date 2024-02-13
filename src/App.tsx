import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown";

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

function App() {
  const [markDownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
     <div>
      <h1 className='text-center mt-3'>
        Markdown Previewer
      </h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={markDownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
            <ReactMarkdown>{markDownText}</ReactMarkdown>
          </div>
        </div>   
     </div>
    </>
  )
}

export default App
