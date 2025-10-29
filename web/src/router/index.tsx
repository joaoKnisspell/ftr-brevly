import { BrowserRouter, Routes, Route } from 'react-router'
import CentralizedLayout from '../layouts/CentralizedLayout.tsx'
import HomePage from '../pages/HomePage.tsx'
import RedirectPage from '../pages/RedirectPage.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx'

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route element={<CentralizedLayout />} >
            <Route path="/redirect" element={<RedirectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}