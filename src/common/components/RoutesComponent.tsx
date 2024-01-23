import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '@/common/templates/MainLayout';
import ErrorPage from '@/common/pages/ErrorPage';
import HomePage from '@/common/pages/HomePage';
import LoginPage from '@/features/auth/pages/LoginPage';
import ProtectedRoute from '@/features/auth/components/ProtectedRoute';
import { default as EnglishPage } from '@/features/english/pages/HomePage';
import { default as InterviewPage } from '@/features/interview/pages/HomePage';

const RoutesComponent = () => {
    return ( 
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='english' element={<ProtectedRoute><EnglishPage /></ProtectedRoute>} />
                <Route path='interview' element={<ProtectedRoute><InterviewPage /></ProtectedRoute>} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    </BrowserRouter> );
}
 
export default RoutesComponent;