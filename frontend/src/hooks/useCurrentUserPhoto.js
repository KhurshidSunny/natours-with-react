import { useEffect, useState } from "react";

export function useCurrentUserPhoto(currentUserPhotoFileName) {
  const [currentUserPhoto, setCurrentUserPhoto] = useState("");
  console.log(currentUserPhotoFileName);

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch(
          // `${
          //   import.meta.env.VITE_BACKEND_IMAGE_URL
          // }/img/users/${currentUserPhotoFileName}`,
          `https://natoursapp-gm71q0ya.b4a.run/public/img/users/user-1.jpg`,

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
        console.log(imgUrl);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchImage();
  }, [currentUserPhotoFileName]);
  return currentUserPhoto;
}
