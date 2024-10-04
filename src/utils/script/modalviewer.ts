export function loadModelViewerScript() {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load model-viewer script'));
    document.head.appendChild(script);
  });
}

export function resetGlbCoin() {
  const modelViewer = document.querySelector('#reveal-coin') as HTMLElement & {
    cameraOrbit: string;
    returnToInitialPosition: number;
  };

  if (!modelViewer) return;

  const initialOrbit = '45deg 90deg 45deg';
  let userInteracting = false;

  modelViewer.addEventListener('camera-change', () => {
    userInteracting = true;
    clearTimeout(modelViewer.returnToInitialPosition);
    modelViewer.returnToInitialPosition = window.setTimeout(() => {
      userInteracting = false;
      modelViewer.cameraOrbit = initialOrbit;
    }, 50);
  });

  const resetCameraOrbit = () => {
    if (!userInteracting) {
      modelViewer.cameraOrbit = initialOrbit;
    }
  };

  modelViewer.addEventListener('mouseup', resetCameraOrbit);
  modelViewer.addEventListener('touchend', resetCameraOrbit);
}
