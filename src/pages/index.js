import React from 'react';

function IndexPage() {
  return (
    <div className="container mx-auto">
      <main className="text-center">
        <h1 className="text-5xl font-semibold my-5">
          Welcome to{' '}
          <a href="https://gatsbyjs.org" className="text-red-600">
            Gatsby.js!
          </a>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="font-mono bg-blue-200 p-1 rounded">
            src/pages/index.js
          </code>
        </p>
      </main>
    </div>
  );
}

export default IndexPage;