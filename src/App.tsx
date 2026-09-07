



import { useState } from 'react';

export default function App() {
  const [idea, setIdea] = useState('');

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f7f7f5',
      color: '#222',
      fontFamily: 'Arial, sans-serif',
      padding: '40px'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '42px', marginBottom: '8px' }}>
          ThinkSpace
        </h1>

        <p style={{ color: '#666', marginBottom: '40px' }}>
          A journal for your ideas.
        </p>

        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="What's on your mind?"
          style={{
            width: '100%',
            minHeight: '300px',
            padding: '20px',
            fontSize: '18px',
            border: '1px solid #ddd',
            borderRadius: '12px',
            resize: 'vertical',
            boxSizing: 'border-box'
          }}
        />

        <p style={{ color: '#888', marginTop: '12px' }}>
          {idea.length} characters
        </p>
      </div>
    </div>
  );
}



