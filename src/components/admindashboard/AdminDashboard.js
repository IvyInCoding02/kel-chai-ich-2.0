import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { auth } from '../../api/firebase';
import styles from './admindashboard.module.css';
import { storage } from '../../api/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { addDoc,collection, } from 'firebase/firestore';
import { db } from '../../api/firebase';
import AdminScholarships from './adminlogin/AdminScholarships';

  

function AdminDashboard() {
  const scholarshipsCollectionRef = collection(db,"scholarships");
  const [imageUpload, setImageUpload] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newInfo, setNewInfo] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newRequirements, setNewRequirements] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newImage, setNewImage] = useState("");
  const formRef = useRef(null);

  const resourcesCollectionRef = collection(db, "resources")
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [pdf, setPdf] = useState("");

  const createScholarship = async (e) => {
    e.preventDefault();
    await addDoc(scholarshipsCollectionRef, {
      title: newTitle,
      fund: newInfo,
      link: newLink,
      requirements: newRequirements,
      category: newCategory,
      deadline: newDeadline,
      country: newCountry,
      image : newImage
    }).catch(err => console.log(err))
    formRef.current.reset();
    alert("Scholarship is successfully created!") 
  };

    const uploadImage = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // alert("Image Uploaded"); 
      // getDownloadURL(snapshot.ref).then((url) => { 
      //   setImageList((prev) => {[...prev, url]})
      // })
    });
  };


  const createResource = async (e) => {
    e.preventDefault();
    await addDoc(resourcesCollectionRef, {
      title,
      info,
      image,
      date,
      pdf  
    }).catch(err => console.log(err));
    console.log(title, info, image, date);
    alert("Resource in successfully created!")
  }

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear()
    navigate('/login')
    }

  return (
    <section>
      <h1 className={styles.headerText}>Welcome to Admin Dashbooard!</h1>
      <div className={styles.adminContainer}>
      <form className={styles.scholarshipForm}  ref={formRef} onSubmit={createScholarship}>
        <h2 >Create a scholarship here!</h2>
        <input type="text" placeholder="Title" onChange={(e) => {setNewTitle(e.target.value)}} required/>
        <input type="text" placeholder="Scholarhsip funding" onChange={(e) => {setNewInfo(e.target.value)}} required/>
        <input type="text" placeholder="Requirements" onChange={(e) => {setNewRequirements(e.target.value)}} required/>
        <input type="date" placeholder="Deadline" onChange={(e) => {setNewDeadline(e.target.value)}} required/>
        <input type="text" placeholder="Category" onChange={(e) => {setNewCategory(e.target.value)}} required/>
        <input type="text" placeholder="Country" onChange={(e) => {setNewCountry(e.target.value)}} required/>
        <input type="url" placeholder="Link to more information" onChange={(e) => {setNewLink(e.target.value)}} required/>
        <input type="text" placeholder="Upload image link" onChange={(e) => {setNewImage(e.target.value)}} required/>
        {/* <input type="file" onChange={(e) => {setImageUpload(e.target.files[0])}}/>
        <button onClick={uploadImage}>Upload image</button> */}
        <button className={styles.btn} type="submit">Create scholarship</button>
      </form>
      
      {/* <form className={styles.resourcesForm}>
        <h2>Make an addition to resources!</h2>
        <input  required type="text"  placeholder="Title" onChange ={(e) => {setTitle(e.target.value)}}/>
        <input type="text" placeholder="Info about the resource" onChange ={(e) => {setInfo(e.target.value)}} required />
        <input type="date" placeholder="Date" onChange ={(e) => {setDate(e.target.value)}}/>
        <input type="text" placeholder="Upload image link" onChange ={(e) => {setImage(e.target.value)}} required/>
        <input type="text" placeholder="Name pdf document" onChange ={(e) => {setPdf(e.target.value)}} required/>
        <input type="file" onChange={(e) => {setImageUpload(e.target.files[0])}}/>
        <button className={styles.btn} onClick={uploadImage}>Upload image</button>
        <button className={styles.btn} onClick={createResource} >Add new resource</button>
      </form> */}
    </div>
    <div>
        <button className={styles.logoutBtn} onClick={logout}>
          Logout
        </button>
      </div>
      <AdminScholarships/>
    </section>
  );
}

export default AdminDashboard;


  // const adminSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("Signed out succesfully");
  //     })
  //     .catch("Error");
  // };

  

{/* <div className={styles.btns}>
        <Nav.Link as={Link} to="/scholarshipform">
          <button className={styles.btn}>Create a scholarship</button>
        </Nav.Link>
        <button className={styles.btn}>Delete</button> 
      </div>
      <div className={styles.btns}>
        <Nav.Link href="/hi">
          <button className={styles.btn}>Addition to resources</button>
        </Nav.Link>
        <button className={styles.btn}>Delete</button> 
      </div> */}





