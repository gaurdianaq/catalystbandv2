import { ContentfulClientApi, Entry } from "contentful";
import { useEffect, useState } from "react";
import { ContactInfo } from "../contentfultypes";

export function Footer({ client }: { client: ContentfulClientApi }) {
  const [contactInfo, setContactInfo] = useState<Entry<ContactInfo>[] | null>(
    null
  );
  useEffect(() => {
    client
      .getEntries<ContactInfo>({ content_type: "contactInfo" })
      .then((contectInfoCollection) => {
        setContactInfo(contectInfoCollection.items);
      });
  }, []);

  return contactInfo === null ? (
    <p>loading</p>
  ) : (
    <div className="footer-content">
      <div className="footer-content-contact hideondesktop">
        {contactInfo.map((entry, index, collection) => {
          const mailField = (
            <table>
              <tr>
                <th className="align-left" colSpan={2}>
                  {entry.fields.name}
                </th>
              </tr>
              <tr>
                <td className="align-right label">Phone:</td>
                <td className="align-left details">
                  {entry.fields.phoneNumber}
                </td>
              </tr>
              <tr>
                <td className="align-right label">Email:</td>
                <td className="align-left details">
                  <a href={`mailto:${entry.fields.email}`}>
                    {entry.fields.email}
                  </a>
                </td>
              </tr>
            </table>
          );
          return index % 2 !== 0 || index === collection.length - 1 ? (
            mailField
          ) : (
            <>
              {mailField}
              {<br />}
            </>
          );
        })}
      </div>
      <div className="footer-content-contact hideonmobile">
        <ul>
          {contactInfo.map((entry, index, collection) => {
            const mailField = (
              <li>
                {entry.fields.name} - Phone: {entry.fields.phoneNumber} Email:{" "}
                <a href={`mailto:${entry.fields.email}`}>
                  {entry.fields.email}
                </a>
              </li>
            );
            return index % 2 !== 0 || index === collection.length - 1 ? (
              mailField
            ) : (
              <>
                {mailField}
                {<li>|</li>}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
