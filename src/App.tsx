import './App.css'
import AppContainer from './AppContainer'
import { ThemeProvider } from "@/components/theme-provider"


// This app shows the daily water levels of dams under KSEB.
// data source https://dams.kseb.in/?page_id=45
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppContainer />
    </ThemeProvider>
  )
}

export default App
