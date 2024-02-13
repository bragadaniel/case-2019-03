import React from 'react';
import { Helmet } from 'react-helmet';
interface LayoutInterface {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutInterface) => {
  const meta = [
    {
      name: 'keywords',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam modi repellendus.',
    },
    {
      name: 'robots',
    },
  ];
  return (
    <div>
      <Helmet title="Prontuário médico" meta={meta}>
        <html lang="pt-br" />
      </Helmet>
      <main>{children}</main>
    </div>
  );
};
