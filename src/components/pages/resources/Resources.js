import React, { useEffect, useState } from "react";
import styles from "./resources.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../api/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function Resources() {
  const [resources, setResources] = useState([]);
  const [downloadURL, setDownloadURL] = useState(null);
  const resourcesCollectionRef = collection(db, "resources");

  useEffect(() => {
    const getResources = async () => {
      const data = await getDocs(resourcesCollectionRef);
      setResources(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getResources();
  }, []);

  // const storage = getStorage();
  // const fileRef = ref(storage, 'images')

  // useEffect(() => {
  //     Initialize Firebase Storage

  //     Get the download URL for the specified file reference
  //     getDownloadURL(ref(storage, fileRef))
  //       .then((url) => {
  //         // Store the download URL in state
  //         setDownloadURL(url);
  //       })
  //       .catch((error) => {
  //         // Handle any errors
  //         console.error('Error getting download URL: ', error);
  //       });
  //   }, [fileRef]);

  // const uploadImage = () => {
  //     if (imageUpload == null) return;
  //     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //     uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //       alert("Image Uploaded");
  //       getDownloadURL(snapshot.ref).then((url) => {
  //         setImageList((prev) => {[...prev, url]})
  //       })
  //     });
  //   };

  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <h1 className={styles.headlineTitle}>University Resources</h1>
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
      {resources.map((resource) => {
        return (
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{resource.title}</h1>
              <img className={styles.img} src={resource.image} alt="pdf document" />
            <p className={styles.info}>{resource.info}</p>
            <a href={resource.uploadImage} dowload="pdf document">
              <button className={styles.download}>
                Download {resource.pdf}
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Resources;
