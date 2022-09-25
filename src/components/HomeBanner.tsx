import { ContentfulClientApi, Entry } from "contentful";
import { useEffect, useState } from "react";
import { HomeBannerContent, AssetType } from "../contentfultypes";

export function HomeBanner({
  client,
}: {
  client: ContentfulClientApi;
}): JSX.Element {
  const [homeBanner, setHomeBanner] = useState<Entry<HomeBannerContent>>();
  useEffect(() => {
    console.log("about to get content from contentful");
    client
      .getEntry<HomeBannerContent>("4H1e0jT1iNkmHaMD4wGV5U")
      .then((entry) => {
        console.log(entry);
        setHomeBanner(entry);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return homeBanner !== undefined ? (
    <div className="front-page">
      <img
        src={(homeBanner?.fields.bannerImage.fields as AssetType).file.url}
      />
      <div className="heading">
        <h1>{homeBanner?.fields.title}</h1>
      </div>
    </div>
  ) : (
    <p>loading</p>
  );
}
