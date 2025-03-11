
import './App.css';

function Title () {
  return (
      <h2>It is a title component</h2>
  )
}

function Header () {
  return (
      <>
        <h2>It is a header component</h2>
        <Title/>
      </>

  )
}

function Content() {
  return (
      <>
        <h2>It is a content component</h2>
        <Title/>
      </>
  )
}

function Footer () {
  return (
      <>
        <h2>It is a footer component</h2>
        <Title/>
      </>
  )
}


function App() {
  return (
      <div className="App">
        <Header />

        <Content />
        <Footer />
      </div>
  );
}

export default App;