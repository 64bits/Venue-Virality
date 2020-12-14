import React, { useEffect } from 'react';
import paper from 'paper';
import { makeStyles } from '@material-ui/core/styles';
import gridImage from './svg/grid.svg';

const useStyles = makeStyles({
  canvas: {
    width: '100%',
    height: '100%',
  }
});

function App() {
  const canvas = React.createRef();
  const classes = useStyles();

  useEffect(() => {
    if (!canvas.current) return;
    paper.setup(canvas.current);
    paper.project.importSVG(gridImage);
    paper.view.draw();
  }, [canvas]);

  return (
    <canvas className={classes.canvas} ref={canvas} />
  );
}

export default App;
