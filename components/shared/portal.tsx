import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    children: React.ReactNode | React.ReactNode[];
}

const Portal = ({ children }: PortalProps) => {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, modalRoot as HTMLElement );
};

export default Portal;