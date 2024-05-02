import React, { useEffect, useState } from 'react';
import Filter from '../../Filter/Filter';
import { db } from '../../../api/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import styles from './scholarshippage.module.css';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../../api/firebase';




function ScholarshipsPage() {
  const [listView, setListView] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [scholarships, setScholarships] = useState([]);
  const scholarshipsCollectionRef = collection(db, "scholarships");
  const [imageList, setImageList] = useState([]);


    const getScholarships = async () => {
      const data = await getDocs(scholarshipsCollectionRef);
      setScholarships(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     
    };

  const q = query(collection(db, 'scholarships'), where('category', '==', categoryFilter));
useEffect(() => {
  getDocs(q)
  .then((querySnapshot) => {
    if(categoryFilter == "All"){
      getScholarships();
    }else{
      console.log(querySnapshot)
      const scholarshipsArray = []
      querySnapshot.forEach((doc) => {
        // doc.data() содержит данные документа
        const data = doc.data();
        console.log(data);
        scholarshipsArray.push(data)
      });
      setScholarships(scholarshipsArray);
    } 
  })
  .catch((error) => {
    console.error('Server Error:', error);
  });
},[categoryFilter])


  // const imageListRef = ref(storage, "images/");
  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div>
      <div className={styles.headline}>
        <h1 className={styles.headlineTitle}>Scholarships for you!</h1>
        <p className={styles.headlineDescr}>
          Explore our Central Asia Scholarship Hub, your one-stop destination
          for region-specific scholarships. Discover opportunities for
          undergraduates, graduates, and doctoral candidates. If you have
          information on suitable scholarships, please email us. Your
          contribution can empower fellow Central Asian students on their
          educational journey. Join us in shaping a brighter future through
          education!
        </p>
      </div>
      <Filter
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        setListView={setListView}
      />
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
                <p className={styles.fund}>Scholarship: {scholarship.info}</p>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScholarshipsPage;