import { ContentfulClientApi } from "contentful";
import { useState, useEffect } from "react";
import { AssetType, GalleryImageContent } from "../contentfultypes";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export interface GalleryImageProps {
  src: string;
  width: number;
  height: number;
}

export function Gallery({ client }: { client: ContentfulClientApi }) {
  const [galleryImages, setGalleryImages] = useState<Array<GalleryImageProps>>([]);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    client
      .getEntries<GalleryImageContent>({ content_type: "galleryImage" })
      .then((galleryEntries) => {
        console.log(galleryEntries);
        setGalleryImages(
          galleryEntries.items.map<GalleryImageProps>((entry) => {
            return {
              src: (entry.fields.image.fields as AssetType).file.url,
              width: entry.fields.imageWidth,
              height: entry.fields.imageHeight
          }})
        );
      });
  }, [])
  return <div className="contentcontainer">
    <div className="content">
      <div className="centered topspace"><h1>Gallery</h1></div><br />
      <PhotoAlbum layout="rows" photos={galleryImages} onClick={({ index }) => setIndex(index)}/>
      <Lightbox
                slides={galleryImages}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
    </div>
  </div>
}
