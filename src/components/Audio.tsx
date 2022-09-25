export interface AudioProps {
  songSrc: string;
  songLabel: string;
}

export function Audio({ songSrc, songLabel }: AudioProps) {
  return (
    <div className="song">
      <div className="songplayer">
        <audio controls>
          <source src={songSrc} type="audio/mpeg" />
        </audio>
      </div>
      <div className="songlabel">{songLabel}</div>
    </div>
  );
}
