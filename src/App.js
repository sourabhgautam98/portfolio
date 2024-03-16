import React, { useState, useEffect } from 'react';
import Dashboard from './Pages/Dashboard';
import Spinner from '../src/compontents/spinner'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner /> 
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default App;
