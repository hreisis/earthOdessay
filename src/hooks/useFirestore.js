import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const useFirestore = (collect) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = getDocs(collection(projectFirestore, collect));
    let documents = [];
    unsub.forEach((doc) => {
      documents.push({ ...doc.data(), id: doc.id });
    });
    setDocs(documents);
  }, [collect]);

  return { docs };
};

export default useFirestore;
