import { useState } from "react";

function IconFallback({ src, alt, className = "", fallbackIcon = null }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src || hasError) {
    if (fallbackIcon) {
      return fallbackIcon;
    }
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-200 rounded`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6v6l4 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && (
        <div className={`${className} bg-gray-100 animate-pulse rounded`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? "" : "hidden"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </>
  );
}

export default IconFallback;
