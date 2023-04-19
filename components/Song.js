import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AudioPlayer } from './AudioPlayer';

const Lyric = ({ lyric, index }) => {
    const [showExplanation, setShowEx] = useState(false);
    const [canShowExplanation, setCanShowExplanation] = useState(false);

    useEffect(() => {
        if (lyric.explanation != "") {
            setCanShowExplanation(true);
        }
    }, [])

    const toggleExplanation = () => {
        if (showExplanation) {
            setShowEx(false)
        } else {
            setShowEx(true)
        }
    }

    const hasExplanation = () => {
        const explanationClass = 'hasExplanation';

        if (lyric.explanation === "") {
            return ''
        } else if (lyric.explanation != "" && lyric.explanation) {
            return explanationClass;
        } else if (lyric.explanation === "") {
            return ''
        } else {
            return '';
        }
    }

    return (
        <div key={index}>
            <p onClick={canShowExplanation ? () => toggleExplanation() : null} className={'lyric ' + (hasExplanation())}>{lyric.lyric}</p>
            {showExplanation &&
                <div className="explanation">
                    <p>{lyric.explanation}</p>
                    {lyric.type === "youtube" &&
                        <iframe className="youtube-iframe" width="560" height="315" src={lyric.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                </div>}
        </div>
    )
}

const Song = ({ song }) => {
    // props passed as array with onject
    const { title, description, slug, lyrics } = song[0];

    return (
        <div className="songPage">
            <div className='info'>
                <h1 className='title'>{title}</h1>
                <p>{description}</p>
                <Image src={`/assets/images/tracklist-cover-art/${slug}-dark.png`}
                    className="tracklist-img"
                    alt={``}
                    width={1000}
                    height={50} />
                <br />
                <AudioPlayer audioSrc={require(`../public/assets/mp3s/catch_reduce/${slug}.mp3`)} />
            </div>

            <div className='lyrics-container'>
                <div className='lyrics'>
                    {lyrics.map((lyric, index) => {
                        return (
                            <Lyric key={index} lyric={lyric} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Song;