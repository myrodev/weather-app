import React, { useState } from 'react';
import './App.css';
import Card from './components/card';

export interface userI {
  name: {
    first: string;
    last: string;
    title: string;
  };
  id: {
    value: string;
  };
  picture: {
    large: string;
  };
  gender: string;
}

const App: React.SFC = () => {
  const url: string = 'https://randomuser.me/api/';
  const [state, setState] = useState<userI[] | undefined>([]);

  React.useEffect(() => {
    const ApiReq = async (): Promise<any> => {
      const response = await fetch(url);
      const data = await response.json();

      setState(data.results);
    };

    ApiReq();
  }, []);

  return (
    <div className="App">
      <h1>User Random Api</h1>
      <section className="Cards">
        {state && state.map((user) => <Card key={user.id.value} user={user} />)}
      </section>
    </div>
  );
};

export default App;
