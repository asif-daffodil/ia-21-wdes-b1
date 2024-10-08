

function App() {
  const msg = "This is heading 1";
  const paraStyle = {
    color: "green",
    fontSize: "20px",
    fontFamily: "Arial",
    fontStyle: "italic"
  }; 
  return (
    <>
      <div>
        <h1 style={{color: "red", fontSize: "40px", fontFamily: "Arial", fontStyle: "italic" }}>{msg}</h1>
        <p style={paraStyle}>This is a paragraph</p>
      </div>
      <div>
        <h2>This is heading 2</h2>
        <p>This is another paragraph</p>
      </div>
    </>
  )
}

export default App
