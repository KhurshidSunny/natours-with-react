import { useEffect, useState } from "react";

export function useTourImageCover(imageCover) {
  const [tourImageCover, setTourImageCover] = useState("");
  useEffect(() => {
    async function getTourImageCover() {
      try {
        const res = await fetch(
          `http://127.0.0.1:3000/img/tours/${imageCover}`,
          {
            credentials: "include",
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch the image.");
        }

        const imgBlob = await res.blob();
        const imgUrl = URL.createObjectURL(imgBlob);

        setTourImageCover(imgUrl);
      } catch (err) {
        console.log(err.message);
      }
    }
    getTourImageCover();
  }, [imageCover]);

  return tourImageCover;
}
