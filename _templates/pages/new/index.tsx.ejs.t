---
to: src/pages/<%= h.toCamelCase(name) %>.tsx
---
import React from 'react';
import SEO from '@components/common/SEO';

const <%= h.toPascalCase(name) %>Page: React.FC = () => (
  <div>
    <SEO />
    Page <%= h.toPascalCase(name) %>
  </div>
);

export default <%= h.toPascalCase(name) %>Page;
