import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo';
import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
    >
      <h2>About This Site</h2>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
