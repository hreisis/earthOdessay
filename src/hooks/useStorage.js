import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create reference

    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        console.log(projectFirestore);
        const imageRef = await addDoc(collection(projectFirestore, "images"), {
          image: file.name,
          url: url,
        });
        console.log(url);
        console.log("Document written with ID: ", imageRef.id);
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
