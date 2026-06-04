import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

function App() {
   const [message, setMessage] = useState(0);

   useEffect(() => {
      fetch('/api/hello')
         .then((res) => res.json())
         .then((data) => setMessage(data.message));
   }, []);

   return (
      <div className="App">
         <h1 className="font-bold p-4 text-3xl">{message}</h1>
         <Button variant="outline">Button</Button>
      </div>
   );
}

export default App;
