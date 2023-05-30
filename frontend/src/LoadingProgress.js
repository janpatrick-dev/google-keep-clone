import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingProgress = ({ isLoading }) => {
  const [color, setColor] = useState("#ffffff");
  const [loadingText, setLoadingText ] = useState('');
  const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 5rem;
  `;

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoadingText('Server asleep. Load time: 30 seconds.')
      }, 5000);
    }
  }, [isLoading]);

  return isLoading && (
    <div className="center">
      <ClipLoader color={color} loading={isLoading} size={100} css={override}  />
      <p>{loadingText}</p>
    </div>
  )
}

export default LoadingProgress;