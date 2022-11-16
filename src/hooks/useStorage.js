import { useState, useEffect } from "react";
import { projectStorage} from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create reference
    // console.log(projectStorage);
    const storageRef = ref(projectStorage, file.name);
    // console.log(storageRef);

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
      async() => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        // const docRef = await addDoc(collection(db, "users"), {
        //   first: "Ada",
        //   last: "Lovelace",
        //   born: 1815
        // });
        // console.log("Document written with ID: ", docRef.id);
        setUrl(url);
        //console.log(url);
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