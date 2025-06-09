
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import InvoiceList from '@/components/InvoiceList';
import CreateInvoice from '@/components/CreateInvoice';
import CustomerList from '@/components/CustomerList';
import InvoiceDetails from '@/components/InvoiceDetails';
import Profile from '@/components/Profile';
import Settings from '@/components/Settings';

type View = 'dashboard' | 'invoices' | 'create-invoice' | 'customers' | 'invoice-details' | 'profile' | 'settings';

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentView} />;
      case 'invoices':
        return <InvoiceList onNavigate={setCurrentView} onSelectInvoice={setSelectedInvoiceId} />;
      case 'create-invoice':
        return <CreateInvoice onNavigate={setCurrentView} />;
      case 'customers':
        return <CustomerList onNavigate={setCurrentView} />;
      case 'invoice-details':
        return <InvoiceDetails invoiceId={selectedInvoiceId} onNavigate={setCurrentView} />;
      case 'profile':
        return <Profile onNavigate={setCurrentView} />;
      case 'settings':
        return <Settings onNavigate={setCurrentView} />;
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main className="pt-16">
        {renderView()}
      </main>
    </div>
  );
};

export default Index;
