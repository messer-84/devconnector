import React from 'react';

const yearNow = () =>{
  return new Date().getFullYear();
};

export default () => (
  <footer className="bg-dark text-white mt-5 p-4 text-center">
    Copyright &copy; {yearNow()} DevConnector
  </footer>
);