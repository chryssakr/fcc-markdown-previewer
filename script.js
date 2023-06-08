marked.setOptions({
    breaks: true
  });
  
  const markRenderer = new marked.Renderer();
  const loadText = `
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
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `
  
  function App() {
    
    // using useState hook
    const [text, setText] = React.useState(loadText);
    
    return (
      <div className = "text-center px-4">
        <h1 className = "p-4">My Markdown Previewer</h1>
        <textarea 
          name = "editor" 
          id = "editor" 
          className = "textarea" 
          cols = "50" 
          rows = "10" 
          value = {text}
          onChange = {(e) => setText(e.target.value)}
        ></textarea>
        <h2 className = "mt-3">Output</h2>
        <Preview markdown = {text} />
      </div>
    )
  }
  
  // child functional component: Preview
  function Preview({markdown}) {
    return (  
      <div id = "previewWrap" className = "text-center">
        <div id = "preview" dangerouslySetInnerHTML = {{ __html: marked(markdown, { renderer: markRenderer }) }}>
        </div>
      </div>
      
    );
  }
  
  ReactDOM.render(<App/>, document.getElementById("root"));