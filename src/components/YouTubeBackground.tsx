import { useEffect, useRef, useState } from 'react';

interface YouTubeBackgroundProps {
  videoId: string;
  className?: string;
}

export function YouTubeBackground({ videoId, className = '' }: YouTubeBackgroundProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerElementRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const initializePlayer = () => {
      if (cancelled || !playerElementRef.current || !(window as any).YT?.Player) return;
      playerRef.current = new (window as any).YT.Player(playerElementRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
        },
      });
    };

    if ((window as any).YT?.Player) {
      initializePlayer();
    } else {
      const previousReady = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        previousReady?.();
        initializePlayer();
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
      }
    }

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [videoId]);

  const handleUnmute = () => {
    if (playerRef.current && playerRef.current.unMute) {
      playerRef.current.unMute();
      setIsMuted(false);
    }
  };

  const handleMute = () => {
    if (playerRef.current && playerRef.current.mute) {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* YouTube Player Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vh] min-w-[100%] h-[85vw] min-h-[100%]">
        <div ref={playerElementRef} className="w-full h-full" />
      </div>

      {/* Unmute/Mute Button */}
      <button
        onClick={isMuted ? handleUnmute : handleMute}
        className="absolute bottom-8 right-8 z-20 px-6 py-3 bg-white/90 backdrop-blur-sm hover:bg-white text-stone-800 font-bold rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
      >
        {isMuted ? (
          <>
            <svg 
              className="size-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" 
              />
            </svg>
            Enable Audio
          </>
        ) : (
          <>
            <svg 
              className="size-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
              />
            </svg>
            Mute Audio
          </>
        )}
      </button>
    </div>
  );
}
