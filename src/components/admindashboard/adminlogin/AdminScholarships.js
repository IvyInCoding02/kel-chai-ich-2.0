import React, { useEffect, useState } from 'react';
import { db } from '../../../api/firebase';
import { collection, getDocs, query, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import styles from "./adminscholarships.module.css";


function AdminScholarships() {
    const [scholarships, setScholarships] = useState([]);
    const scholarshipsCollectionRef = collection(db, "scholarships");
    const [listView, setListView] = useState(true);
   
  
  
      const getScholarships = async () => {
        const data = await getDocs(scholarshipsCollectionRef);
        setScholarships(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };
  
    const q = query(collection(db, "scholarships"));
    useEffect(() => {
      getDocs(q)
        .then((query) => {
          getScholarships();
        })
        .catch((error) => {
          console.error("Server Error:", error);
        });
    }, [scholarships]);

  // const updateScholarship = async (id) => {
  //   const scholarshipDoc = doc(db, "scholarships", id);
  //   const newFields = {
  //     title: "",
  //     fund: "",
  //     category: "",
  //     info: "",
  //     deadline: "",
  //     country: "",
  //     requirements: "",
  //     link: "",
  //     more: "",
  //   };
  //   await updateDoc(scholarshipDoc, newFields);
  // };


  // const deleteScholarship = async (id) => {
  //   const scholarshipDoc = doc(db, "scholarships", id);
  //   await deleteDoc(scholarshipDoc);
  // };
  
  const deleteScholarship = async (id) => {
    try{
      await deleteDoc(doc(db, "scholarships", id))
      setScholarships(scholarships.filter((item) => !item.id))
    }catch{

    }
  };

    return (
      <div>
        <div className={styles.headline}>
          <h1 className={styles.headlineTitle}>Scholarships Update and Delete</h1>
        </div>
        <div className={listView ? styles.container : styles["card"]}>
          {scholarships.map((scholarship) => {
            return (
              <div className={styles.wrapper}>
                 <img
                    src={scholarship.image}
                    className={styles.img}
                    alt="scholarship image"
                  />
                <div className={styles.info}>
                  <h1 className={styles.title}>{scholarship.title}</h1>
                  <p className={styles.fund}>Scholarship: {scholarship.fund}</p>
                  <p className={styles.category}>
                    Category: {scholarship.category}
                  </p>
                  <p className={styles.deadline}>
                    Deadline: {scholarship.deadline}
                  </p>
                  <p className={styles.country}>Country: {scholarship.country}</p>
                  <p className={styles.country}>
                    Requirements: {scholarship.requirements}
                  </p>
                  <a className={styles.more} href={scholarship.link}>
                    Learn more
                  </a>
                  {/* <button  className={styles.changeButtons} onClick={()=> {updateScholarship(scholarship.id)}}>Edit</button> */}
                  <button className={styles.changeButtons} onClick={() => {deleteScholarship(scholarship.id)}}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default AdminScholarships;