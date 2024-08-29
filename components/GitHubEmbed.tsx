import React from 'react';

interface GitHubEmbedProps {
  url: string;
  width?: string;
  height?: string;
}

export const GitHubEmbed: React.FC<GitHubEmbedProps> = ({ url, width = '100%', height = '500px' }) => {
  const isValidGitHubUrl = (url: string): boolean => {
    const githubRepoPattern = /^https:\/\/github.com\/[^\/]+\/[^\/]+$/;
    return githubRepoPattern.test(url);
  };

  if (!isValidGitHubUrl(url)) {
    return <div>Invalid GitHub URL</div>;
  }

  return (
    <iframe
      src={`https://github.com/${url.replace('https://github.com/', '')}`}
      width={width}
      height={height}
      frameBorder="0"
    ></iframe>
  );
};
