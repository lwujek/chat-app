import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    < Contact 
    image ="https://randomuser.me/api/portraits/women/90.jpg"
    name ="Tonya Cook"
    online = "true"
    />
    < Contact 
    image ="https://randomuser.me/api/portraits/men/84.jpg"
    name ="Randy Austin"
    online = "true"
    />
    < Contact 
    image ="https://randomuser.me/api/portraits/women/74.jpg"
    name ="Marilyn White"
    online = ""
    />
    </div>
  );
}

export default App;
