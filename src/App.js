import BlogWebsite from './BlogWebsite';
import Crousal from './components/Crousal';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Crousal/>
      <BlogWebsite/>
    </div>
  );
}

export default App;
