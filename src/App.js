import React, { useEffect } from 'react';
import paper from 'paper';
import gridImage from './svg/grid.svg';
import './App.css';

function App() {
  const canvas = React.createRef();

  useEffect(() => {
    if (!canvas.current) return;
    paper.setup(canvas.current);
    paper.project.importSVG(gridImage);
    paper.project.activeLayer.fitBounds(paper.view.bounds);
    paper.view.draw();
  }, [canvas]);

  return (
    <canvas data-paper-resize={true} ref={canvas}></canvas>
  );
}

export default App;
