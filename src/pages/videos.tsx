import { ContentfulClientApi } from "contentful";
import { useEffect, useState } from "react";
import { YoutubeVideoProps, YoutubeVideo } from "../components/YoutubeVideo";
import {YoutubeVideoContent} from "../contentfultypes";

export function Videos({ client }: { client: ContentfulClientApi }) {
  const [videos, setVideos] = useState<Array<YoutubeVideoProps>>();
  useEffect(() => {
    client
      .getEntries<YoutubeVideoContent>({ content_type: "youtubeVideo" })
      .then((videoEntries) => {
        setVideos(
          videoEntries.items.map<YoutubeVideoProps>((entry) => {
            return {
              videoSrc: entry.fields.videoSource,
              name: entry.fields.name,
            };
          })
        );
      });
  }, []);

  return <div className="contentcontainer">
    <div className="content">
      {videos?.map((video) => {
        return <YoutubeVideo {...video}/>
      })}
    </div>
  </div>
}
