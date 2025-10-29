import App from '../App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import CentralizedLayout from '../layouts/CentralizedLayout.tsx'

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
          <Route element={<CentralizedLayout />} >
            <Route path="/redirect" element={<App />} />
            <Route path="/not-found" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}