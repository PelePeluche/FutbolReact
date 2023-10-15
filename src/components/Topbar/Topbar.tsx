import { AppBar, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom';

/**
 * Renders the top bar component.
 *
 * @returns {React.ReactElement} The top bar component.
 */
export function Topbar(): React.ReactElement {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/statistics">
          Estadísticas
        </Button>
      </Toolbar>
    </AppBar>
  );
}