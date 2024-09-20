import { useEffect, useState } from "react";

export function useFetchPhoto(src, imageType) {
  const [photo, setPhoto] = useState("");
  useEffect(() => {
    async function fetchGuideImage() {
      try {
        const res = await fetch(
          `http://127.0.0.1:3000/img/${imageType}/${src}`,
          {
            credentials: "include",
          }
        );
        if (!res.ok) throw new Error("Failed to fetch photo");
        const imgBlob = await res.blob();
        const imgUrl = URL.createObjectURL(imgBlob);
        console.log(imgUrl);
        setPhoto(imgUrl);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchGuideImage();
  }, [src, imageType]);

  return photo;
}
