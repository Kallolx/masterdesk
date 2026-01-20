import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Users, FileText, Home } from 'lucide-react';

const AdminPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    // Load orders from localStorage
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    setOrders(orderHistory);
  }, []);

  const handleStatusChange = (orderIndex: number, newStatus: string) => {
    const updatedOrders = [...orders];
    updatedOrders[orderIndex] = {
      ...updatedOrders[orderIndex],
      status: newStatus
    };
    
    // Update localStorage
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Settings className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-8 pb-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Orders Management */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <FileText className="w-6 h-6 text-gray-700 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Order Management</h2>
              </div>
              <p className="text-sm text-gray-600 mt-1">View and manage all customer orders</p>
            </div>
            
            <div className="p-6">
              {orders.length === 0 ? (
                <div className="text-center py-8">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Orders Found</h3>
                  <p className="text-gray-600">There are no orders in the system yet.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">#</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Plan Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Purchase Date</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Original Price</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Discount Price</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Final Price</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <span className="text-gray-600">{index + 1}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="font-medium text-gray-900">{order.planName}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-gray-600 text-sm">{formatDate(order.purchaseDate || order.orderedDate)}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-gray-700">{order.originalPrice || order.price}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-gray-700">{order.discountPrice || '0'}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-gray-900 font-medium">{order.finalPrice || order.price}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              order.status === 'Pending' 
                                ? 'bg-orange-100 text-orange-600'
                                : order.status === 'Active'
                                ? 'bg-green-100 text-green-600' 
                                : order.status === 'Cancelled'
                                ? 'bg-red-100 text-red-600'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <select
                              value={order.status}
                              onChange={(e) => handleStatusChange(index, e.target.value)}
                              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Active">Active</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {orders.filter(order => order.status === 'Pending').length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {orders.filter(order => order.status === 'Active').length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Cancelled</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {orders.filter(order => order.status === 'Cancelled').length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;