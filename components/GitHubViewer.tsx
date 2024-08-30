import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

interface GitHubViewerProps {
  url: string;
  language?: string;
  height?: string;
}

export const GitHubViewer: React.FC<GitHubViewerProps> = ({ 
  url,
  language='typescript',
  height='300px',
}) => {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        // GitHubのURLをraw URLに変換
        const rawUrl = url
          .replace('https://github.com/', 'https://raw.githubusercontent.com/')
          .replace('/blob/', '/');

        const response = await fetch(rawUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch file content');
        }

        const text = await response.text();
        setFileContent(text);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFileContent();
  }, [url]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (fileContent === null) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height, resize: 'vertical', overflow: 'auto'}}>
      <Editor 
        //height={100}
        defaultLanguage={language} 
        defaultValue={fileContent}
        theme='vs-dark'
        options={{
          readOnly: true,
          minimap: { enabled: true },
          automaticLayout: true,
        }}
      />
      {/*
      <div style={{textAlign: 'right'}}>
      See on <a href={url} target='_blank' rel='noreferrer' style={{color: '#2255ff'}}>GitHub</a>
      </div>
      */}
    </div>
  );
};

