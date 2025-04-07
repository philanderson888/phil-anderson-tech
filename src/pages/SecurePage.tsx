import React from 'react';

interface SecurePageProps {
  onLogout: () => void;
}

export const SecurePage: React.FC<SecurePageProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Secure Page</h1>
        <p className="text-gray-600 mb-4">
          Welcome to the secure area. You're now logged in.
        </p>
      </div>
    </div>
  );
};