// /unauthorized.tsx or similar
export default function Unauthorized() {
    return (
      <div className="text-center mt-20 px-4">
        <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
        <p className="mt-4 text-lg">You’ve already accessed this test.</p>
        <p className="text-sm mt-2 text-gray-600">Contact the management if you need further access.</p>
      </div>
    );
  }
  