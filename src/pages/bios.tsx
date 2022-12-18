import { ContentfulClientApi } from "contentful";
import { useEffect, useState } from "react";
import { Bio, BioProps } from "../components/Bio";
import { AssetType, Profile } from "../contentfultypes";

export function Bios({ client }: { client: ContentfulClientApi }) {
  const [bios, setBios] = useState<Array<BioProps>>([]);
  useEffect(() => {
    client
      .getEntries<Profile>({ content_type: "profile" })
      .then((profileEntries) => {
        setBios(
          profileEntries.items.map<BioProps>((entry) => {
            return {
              description: entry.fields.description,
              name: entry.fields.name,
              imgSrc: (entry.fields.photo.fields as AssetType).file.url,
            };
          })
        );
      });
  }, []);

  return <div className="contentcontainer">
    <div className="content">
      <div className="centered topspace"><h1>Meet the Band</h1></div><br/>
      <div className="bio">
        <ul>
          {bios.map((bioProps) => {
            return <Bio {...bioProps}/>
          })}
        </ul>
      </div>
    </div>
  </div>;
}
