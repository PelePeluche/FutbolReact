import { Box } from '@mui/material'
import { footerStyles } from './styles'

/**
 * Renders the footer component.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export function Footer (): JSX.Element {
  return (
    <Box sx={footerStyles}>
      © {new Date().getFullYear()} Martes de Futbol App. Todos los derechos
      reservados.
    </Box>
  )
}
