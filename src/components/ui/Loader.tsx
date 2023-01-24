import React from 'react';
import Lottie from 'lottie-react';
import blackSpin from '../../assets/lotties/blackSpinn.json';
import secondarySpin from '../../assets/lotties/secondarySpinn.json';

const Loading = () => {
  return (
    <div className="loading fixed inset-0 z-50 grid place-items-center bg-matte/90">
      <Lottie
        animationData={secondarySpin}
        color="red"
        className="loader w-80 h-80"
      />
    </div>
  );
};

export default Loading;
