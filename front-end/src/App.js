import './App.css';
import Menubar from './Sidebar/Menubar';
import Circlemenu from '../src/Menu/Menutab.js';

function App() {
  return (
    <div className="App ">
        
        <div class="w-screen h-full bg-[url('https://images2.alphacoders.com/118/1181186.jpg')] bg-cover bg-center ">
        <div class="w-full h-full flex flex-col backdrop-blur-lg">
        
        <div class="flex">
        
          <aside class="h-screen sticky top-0">
            <Menubar />
          </aside>
          <Circlemenu />
        </div>
        
        </div>
        
        </div>
      </div>
  );
}

export default App;
 