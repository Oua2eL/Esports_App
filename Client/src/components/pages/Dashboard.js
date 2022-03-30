import React from 'react';
import PostModal from './PostModal';
import Footer from '../Footer/Footer';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
    <div className='Db_container'>
     
    
    <div class="dashboardcontainer">
		<div class="dashboard-box">
			<div class="dashleft"></div>
			<div class="dashright">
				<h3>Add Product</h3>
				<PostModal/>
			</div>
		</div>
	
  </div>
   
   
    </div>

    
    <Footer />
    </>
  )
}

export default Dashboard;