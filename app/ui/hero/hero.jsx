"use client";
import styles from "./hero.module.css";
import Image from "next/image";
import hero from "public/hero.webp";
import shape from "public/shape.png";
import ReactPlayer from "react-player/file";
import { useEffect, useState } from "react";

export default function Hero() {
  const [hasWindow, setHasWindow] = useState(false);
  const [play, setPlay] = useState(false);
  const [path, setPath] = useState(process.env.NEXT_PUBLIC_VIDEO);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
      if (window.innerWidth < 768) {
        setPath(process.env.NEXT_PUBLIC_VIDEO_MOBILE);
      }
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.videoFrame}>
        {/*<Image className={styles.heroImg} src={hero} alt={"Video cover"} />*/}
        {!play && (
          <Image
            className={styles.heroImg}
            src={hero}
            alt={"Video loading"}
            priority={true}
          />
        )}

        {hasWindow && (
          <>
            <ReactPlayer
              className={styles.player}
              loop={true}
              playsinline={true}
              volume={null}
              controls={false}
              playing={true}
              muted={true}
              width="100%"
              height="100%"
              url={path}
              onStart={() => setPlay(true)}
            />
          </>
        )}
      </div>
    </div>
  );
}
