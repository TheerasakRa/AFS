import './App.css';
import Circlemenu from './circlemenu/Cerclemenu';
import Router from './routes/Routes';

function App() {
  return (
    <div className="App ">
        
        <div class="grid w-screen h-full bg-[url('https://images2.alphacoders.com/118/1181186.jpg')] bg-cover bg-center ">
        <div class="w-full h-full grid-cols-3 backdrop-blur-lg">
        
        <div class="grid">

          <Router />

          <Circlemenu />
        </div>
        
        </div>
        
        </div>
      </div>
  );
}

export default App;
 