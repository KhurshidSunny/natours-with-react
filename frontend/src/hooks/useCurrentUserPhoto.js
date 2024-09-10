import { useEffect, useState } from "react";

export function useCurrentUserPhoto(currentUserPhotoFileName) {
  const [currentUserPhoto, setCurrentUserPhoto] = useState("");

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch(
          `http://127.0.0.1:3000/img/users/${currentUserPhotoFileName}`,
          {
            credentials: "include",
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch the image.");
        }
        const imgBlob = await res.blob();
        const imgUrl = URL.createObjectURL(imgBlob);

        setCurrentUserPhoto(imgUrl);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchImage();
  }, [currentUserPhotoFileName]);
  return currentUserPhoto;
}
