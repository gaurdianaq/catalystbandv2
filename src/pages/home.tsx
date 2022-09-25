import { ContentfulClientApi } from "contentful";
import { useEffect, useState } from "react";
import { HomeBanner } from "../components/HomeBanner";
import { AudioProps, Audio } from "../components/Audio";
import { AssetType, AudioContent } from "../contentfultypes";

export function Home({ client }: { client: ContentfulClientApi }) {
  const [sampleAudio, setSampleAudio] = useState<Array<AudioProps>>();
  useEffect(() => {
    client
      .getEntries<AudioContent>({ content_type: "audio" })
      .then((audioEntries) => {
        console.log(audioEntries);
        setSampleAudio(
          audioEntries.items.map<AudioProps>((entry) => {
            return {
              songSrc: (entry.fields.audioFile.fields as AssetType).file.url,
              songLabel: entry.fields.songName,
            };
          })
        );
      });
  }, []);
  return (
    <>
      <HomeBanner client={client} />
      <div className="contenttextheader">
        <h3>
          <u>Sample Audio</u>
        </h3>
      </div>
      <div>
        {sampleAudio !== undefined ? (
          sampleAudio?.map((props) => {
            return (
              <>
                <Audio songLabel={props.songLabel} songSrc={props.songSrc} />
                <br />
              </>
            );
          })
        ) : (
          <p>loading</p>
        )}
        <br />
        <br />
        <div className="contenttext">
          <h3>Book your next event</h3>
        </div>
      </div>
    </>
  );
}
