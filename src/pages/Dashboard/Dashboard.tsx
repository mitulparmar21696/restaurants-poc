import React from 'react';
import { Divider } from 'antd';
import './Dashboard.scss';
import { AppButton } from 'components/Base/AppButton';

const DashboardPage = () => {
  return (
    <div className="DashboardContainer">
      <AppButton type="default">Dinning</AppButton>
      <Divider type="vertical" />
      <AppButton type="default">Take Away</AppButton>
    </div>
  );
};

export default DashboardPage;
