import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPlay, FaPause } from "react-icons/fa";
import styles from "/styles/AudioPlayer.module.css";
// import War from "../assets/War.mp3";
// import win from "../assets/bigwin-logo.png";

const AudioPlayer = ({ audioSrc }) => {
    //state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const sound = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    //references
    const audioPlayer = useRef(); // audio component
    // const audioPlayer = useRef(new Audio(require(".//../assets/war.mp3")));
    const progressBar = useRef(); // progress bar
    const animationRef = useRef(); // reference the animation
    // effect
    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    };

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    };

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    };

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    };

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty(
            "--seek-before-width",
            `${(progressBar.current.value / duration) * 100}%`
        );
        setCurrentTime(progressBar.current.value);
    };

    return (
        <div className={styles.audioPlayer}>
            <div className={styles.imgContainer}>
                <Image src={require("/public/assets/images/bigwin-logo.png")} alt="big win" />
            </div>
            {/* <img src={require("/assets/bigwin-logo.png")} /> */}

            <audio ref={audioPlayer} src={audioSrc} preload="metadata"></audio>

            <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
            {/* progress bar time */}
            <div style={{ textAlign: 'center' }}>
                <input
                    className={styles.progressBar}
                    type="range"
                    defaultValue="0"
                    ref={progressBar}
                    onChange={changeRange}
                    style={{ width: '90%' }}
                />
            </div>
            {/* <div className={styles.progressBarTop}> */}
            {/* current time */}
            {/* <div className={styles.currentTime}>{calculateTime(currentTime)}</div> */}
            {/* duration */}
            {/* <div className={styles.duration}>{calculateTime(duration)}</div> */}
            {/* </div> */}
            
            <div className={styles.progressBarTop}></div>
            <div className={styles.duration}>{calculateTime(duration)}</div>






            <div wtf className={styles.playersButton}>
                <button className={styles.forwardBackward}>
                    <BsArrowLeftShort />{" "}
                </button>
                <button className={styles.playPause} onClick={togglePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className={styles.forwardBackward}>
                    <BsArrowRightShort />
                </button>
            </div>
        </div>
    );
};

export { AudioPlayer };
