import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { projectStorage } from "../../firebase/config";
import { v4 } from "uuid";

function ImageGallery() {
  const [file, setFile] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [progress, setProgress] = useState(0);

  const imagesListRef = ref(projectStorage, "images/");
  const uploadFile = () => {
    if (file == null) return;
    const imageRef = ref(projectStorage, `images/${file.name + v4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        <label className="progress">
          <input
            className="progressInput"
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
          <span> Select +</span>
        </label>
        <button className="progress" onClick={uploadFile}>
          Upload
        </button>
      </Box>

      <Box sx={{ height: "62vh", overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {imageUrls.map((url) => (
            <ImageListItem key={url}>
              <img
                src={url}
                srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt="uploaded pic"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

export default ImageGallery;
