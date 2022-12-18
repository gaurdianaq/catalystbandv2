export interface BioProps {
    description: string;
    name: string;
    imgSrc: string;
}

export function Bio({description, name, imgSrc}: BioProps) {
    return <li><div className="desc">{name}</div><img src={imgSrc}/>{description}</li>
}