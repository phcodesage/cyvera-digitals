import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { SmoothScrollProvider } from './SmoothScrollProvider';

export default function Layout() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen gpu-accelerated" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Header />
        <main className="smooth-scroll-section">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
