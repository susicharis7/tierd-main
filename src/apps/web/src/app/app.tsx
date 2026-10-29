import { useEffect, useState } from 'react';
import type { MessageResponse } from '@tierd/types';

export function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json() as Promise<MessageResponse>)
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('The api is not running'));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900">
      <h1 className="text-4xl font-bold text-white">Tierd</h1>
      <p className="text-slate-300">{message}</p>
    </main>
  );
}

export default App;
