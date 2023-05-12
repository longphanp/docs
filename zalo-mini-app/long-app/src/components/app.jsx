import React from 'react';
import { Route} from 'react-router-dom'
import HomePage from '../pages';
0
import { App, ZMPRouter, AnimationRoutes } from 'zmp-ui';
import { RecoilRoot } from 'recoil';

const MyApp = () => {

  return (
    <RecoilRoot>
      <App >
      <ZMPRouter>
        <AnimationRoutes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          0
        </AnimationRoutes>
      </ZMPRouter>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;