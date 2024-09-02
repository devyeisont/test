import { useEffect, useState } from 'react';

/**
 *
 * @param {String} VdocipherAPIScriptUrl
 */
export default function useVdocipherAPI() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (isScriptLoaded) return;
    const script = document.createElement('script');
    script.onload = () => setIsScriptLoaded(true);
    script.src = 'https://player.vdocipher.com/v2/api.js';
    document.body.append(script);
  }, [isScriptLoaded]);

  return {
    loadVideo: function ({ otp, playbackInfo, container, configuration = {} }) {
      const params = new URLSearchParams('');
      const parametersToAdd = { otp, playbackInfo, ...configuration };
      for (const item in parametersToAdd) {
        params.append(item, parametersToAdd[item]);
      }
      const iframe = document.createElement('iframe');
      iframe.setAttribute('allowfullscreen', 'true');
      iframe.setAttribute('allow', 'autoplay; encrypted-media');
      iframe.setAttribute('frameborder', '0');
      iframe.style.position = 'absolute';
      iframe.style.inset = '0';
      iframe.style.height = '100%';
      iframe.style.width = '100%';
      iframe.style.objectFit = 'cover';
      iframe.src = 'https://player.vdocipher.com/v2/?' + params;
      container.append(iframe);
      return iframe;
    },
    isAPIReady: isScriptLoaded,
  };
}
