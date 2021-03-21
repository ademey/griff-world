import * as React from 'react';
import { AppLayout, SEO } from '../components/app';

const NotFoundPage = () => (
  <AppLayout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </AppLayout>
);

export default NotFoundPage;
