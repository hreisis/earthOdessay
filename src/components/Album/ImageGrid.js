// import React from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { projectFirestore } from "../../firebase/config";

// const ImageGrid = () => {

// const images = async () => {
  
//   const querySnapshot = await getDocs(collection(projectFirestore, "images"));

//   let documents = [];
//   querySnapshot.forEach(doc => {
//           documents.push({...doc.data(), id: doc.id});
//         });
//         console.log(documents)}
      

//   return (
//     <div className="img-grid">
//       {documents &&
//         documents.map((doc) => (
//           <div
//             className="img-wrap"
//             key={doc.id}
//             layout
//             whileHover={{ opacity: 1 }}
//             s
//             // onClick={() => setSelectedImg(doc.url)}
//           >
//             <img
//               src={doc.url}
//               alt="uploaded pic"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//             />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default ImageGrid;
