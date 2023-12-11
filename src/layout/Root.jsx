import React from 'react';
import Header from '../compoments/Header';

import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
      <div className='max-w-screen-xl  mx-auto font-abc px-6'>

           <Header></Header>
           
              <Outlet></Outlet>
            <footer className="footer mt-10 footer-center p-4 bg-base-200 text-base-content">
          <aside>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>

        </div>
    );
};

export default Root;