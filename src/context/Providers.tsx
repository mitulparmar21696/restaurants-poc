import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Providers;
