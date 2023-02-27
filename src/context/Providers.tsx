import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default Providers;
