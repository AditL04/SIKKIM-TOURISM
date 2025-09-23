function AudioPlayer({ audioSrc }) {
    const audioRef = React.useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            // Only reset when audioSrc changes due to monastery selection
            audioRef.current.pause();
            audioRef.current.load();
            // Do NOT call .play() here to avoid browser restrictions
        }
    }, [audioSrc]);

    return (
        <div className="audio-player">
            <audio ref={audioRef} controls>
                <source src={audioSrc} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}
