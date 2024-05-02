import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutUs } from './components/pages/AboutUs/AboutUs';
import { Scholarships } from './components/pages/Scholarships';
import { Footer } from './components/Footer/Footer';
import MyRoutes from './components/routes';
import PartnershipPage from './components/pages/PartnershipPage/PartnershipPage';
import { ContactUs } from './components/pages/contactUs/ContactUs';
import ScholarshipsPage from './components/pages/ScholarshipsPage/ScholarshipsPage';
import HomePage from './components/pages/HomePage/HomePage';
// import { useEffect, useState } from 'react';
// import { db } from './api/firebase';
// import { collection, getDocs, addDoc, updateDoc,doc, deleteDoc } from 'firebase/firestore'; 

function App() {
// const [scholarships, setScholarships] = useState([]);
// const [newCountry, setNewCountry] = useState('');
// const [newCategory, setNewCategory] = useState('');
// const scholarshipsCollectionRef = collection(db, "scholarships")


// // Create
// const createScholarship = async () => {
//   await addDoc(scholarshipsCollectionRef, {country : newCountry, category: newCategory})
// }

// // Read 
// useEffect(() => {
//   const getScholarships = async () =>{
//     const data = await getDocs(scholarshipsCollectionRef);
//     setScholarships(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
//   }

//   getScholarships();
// }, [])


// // Update
// const updateScholarship = async (id, title) => {
//   const scholarshipDoc = doc(db, "scholarships", id)
//   const newFields = { title: title + " !:)"};
//   await updateDoc(scholarshipDoc, newFields)
// }

// // Delete

// const deleteScholarship = async(id) => {
//   const scholarshipDoc = doc(db, "scholarships", id)
//   await deleteDoc(scholarshipDoc);
// }

  return (
    <div className="App">
      <NavBar/>
       <MyRoutes/>
      <Footer/>
      {/* <input type="text" placeholder="Country" onChange={(e)=> {setNewCountry(e.target.value)}}/>
      <input type="text" placeholder="Category" onChange={(e)=> {setNewCategory(e.target.value)}}/>
      <button style={{color: "white", background: "green"}} onClick={createScholarship}>Create scholarship</button>
      {scholarships.map((scholarship) => {
        return (
          <div>
            <h1>{scholarship.title}</h1>
            <p>{scholarship.about}</p>
            <p>{scholarship.requirements}</p>
            <p>{scholarship.country}</p>
            <p>{scholarship.picture}</p>
            <button style={{color: "white", background: "green"}} onClick={() => updateScholarship(scholarship.id, scholarship.title)}>Add</button>
            <button style={{color: "white", background: "green"}} onClick={() => deleteScholarship(scholarship.id)}>Delete</button>
          </div>
        )
      })} */}
    </div>
  );
}

export default App;
