import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className="w-full flex flex-col items-start justify-start h-fit bg-[color:var(--title)]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
