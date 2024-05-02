import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../api/firebase';
import AdminDashboard from '../admindashboard/AdminDashboard';


function AdminPage() {
  const [authAdmin, setAuthAdmin] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (admin) => {
      if(admin){
        setAuthAdmin(admin)
      }else{
        setAuthAdmin(null)
      }
    })
  }, [])


  return (
    <div>
     {authAdmin ? <AdminDashboard/> : "Login Error" } 
    </div>
  )
}

export default AdminPage;