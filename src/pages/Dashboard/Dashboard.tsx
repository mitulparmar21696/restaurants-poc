import React, { useEffect } from 'react';
import { Divider } from 'antd';
import './Dashboard.scss';
import { useDispatch } from 'react-redux';
import { setCartDetails } from 'store/Actions/cart';
import { useNavigate } from 'react-router-dom';
import { AppButton } from 'components/Base/AppButton';

const DashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('cart');
    dispatch(setCartDetails([]));
  }, []);
  return (
    <div className="DashboardContainer">
      <AppButton
        type="default"
        onClick={() => {
          navigate('/pizza-list');
        }}>
        Dinning
      </AppButton>
      <Divider type="vertical" />
      <AppButton
        type="default"
        onClick={() => {
          navigate('/pizza-list');
        }}>
        Take Away
      </AppButton>
    </div>
  );
};

export default DashboardPage;
