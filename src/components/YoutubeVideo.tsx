export interface YoutubeVideoProps {
    videoSrc: string
}

export function YoutubeVideo({videoSrc}:YoutubeVideoProps) {
    return <div className="resp-container">
        <iframe className="resp-iframe" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
}