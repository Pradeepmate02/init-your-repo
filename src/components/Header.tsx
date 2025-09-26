import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-header border-b border-header-border backdrop-blur supports-[backdrop-filter]:bg-header/60" style={{ boxShadow: 'var(--header-shadow)' }}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {!isHomePage && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="flex items-center gap-2 hover:bg-nav-hover"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
          )}
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">Your App</h1>
          </div>
        </div>
        
        <nav className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/')}
            className={`hover:bg-nav-hover ${location.pathname === '/' ? 'bg-nav-active text-primary-foreground' : ''}`}
          >
            Home
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;