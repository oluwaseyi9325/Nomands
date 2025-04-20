import React from "react";

interface SpinnerOverlayProps {
  isLoading: boolean;
}

const SpinnerOverlay: React.FC<SpinnerOverlayProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[whitesmoke] bg-opacity-30 z-50 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerOverlay;

