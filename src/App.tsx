import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RouteScrollToTop from './components/RouteScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import LogoLoader from './components/LogoLoader';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import WhyUsPage from './pages/WhyUsPage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import WebDevPage from './pages/services/WebDevPage';
import UiUxPage from './pages/services/UiUxPage';
import GraphicDesignPage from './pages/services/GraphicDesignPage';
import SocialMediaPage from './pages/services/SocialMediaPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LogoLoader />;
  }

  return (
    <AuthProvider>
      <RouteScrollToTop />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/website-development" element={<WebDevPage />} />
          <Route path="/services/ui-ux-strategy" element={<UiUxPage />} />
          <Route path="/services/graphic-brand-design" element={<GraphicDesignPage />} />
          <Route path="/services/social-media-management" element={<SocialMediaPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
