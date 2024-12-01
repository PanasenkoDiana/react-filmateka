import { createRoot } from 'react-dom/client'
import { Main } from './Main'


const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(<Main></Main>)