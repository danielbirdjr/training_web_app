import React from 'react';
import '../styles/globals.css'; // Importing global styles
import '../styles/variables.css'; // Importing CSS variables
import '../styles/reset.css'; // Importing CSS reset
import Layout from '../app/layout';
import AuthenticatedLayout from '../app/AuthenticatedLayout';

function MyApp({ Component, pageProps }) {
  const isAuthenticated = true; // Set to true for testing authenticated layout

  return isAuthenticated ? (
    <AuthenticatedLayout>
      <Component {...pageProps} />
    </AuthenticatedLayout>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
