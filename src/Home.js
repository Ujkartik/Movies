import React from 'react';
import Search from './Search';
import Movies from './Movies';
import { useGlobalContext } from './Context';

const Home = () => {
  const { isLoading } = useGlobalContext();

  return (
    <>
      <Search />
      <Movies />
    </>
  );
};

export default Home;
