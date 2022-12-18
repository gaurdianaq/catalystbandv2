import { EntryFields, Asset } from "contentful";

export interface AssetType {
  title: string;
  description: string;
  file: {
    url: string;
    details:
      | {
          size: number;
          image?: {
            height: number;
            width: number;
          };
        }
      | undefined;
    fileName: string;
    contentType: string;
  };
}

export interface HomeBannerContent {
  title: EntryFields.Symbol;
  bannerImage: EntryFields.Link<Asset>;
}

export interface AudioContent {
  songName: EntryFields.Symbol;
  audioFile: EntryFields.Link<Asset>;
}

export interface ContactInfo {
  name: EntryFields.Symbol;
  phoneNumber: EntryFields.Symbol;
  email: EntryFields.Symbol;
}

export interface Profile {
  name: EntryFields.Symbol;
  photo: EntryFields.Link<Asset>;
  description: EntryFields.Text;
}

export interface YoutubeVideoContent {
  name: EntryFields.Symbol;
  videoSource: EntryFields.Symbol;
}

export interface GalleryImageContent {
  title: EntryFields.Symbol;
  image: EntryFields.Link<Asset>;
  imageWidth: EntryFields.Number;
  imageHeight: EntryFields.Number;
}