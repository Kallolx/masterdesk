import { User2Icon, ChevronRight, Clipboard, MessageCircle, Users, Plane, Download, ClockFading, Clock, CalendarX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const DashboardPage = () => {
  const userName = "Siam Ahmed";
  const userEmail = "Siam.Ahmed@gmail.com";
  const navigate = useNavigate();
  const [pendingOrders, setPendingOrders] = useState<any[]>([]);
  const [orderHistory, setOrderHistory] = useState<any[]>([]);
  const [activeSubscriptions, setActiveSubscriptions] = useState<any[]>([]);

  useEffect(() => {
    // Load order history
    const history = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    setOrderHistory(history);
    
    // Get pending orders from history (orders with Pending status)
    const pending = history.filter((order: any) => order.status === 'Pending');
    setPendingOrders(pending);
    
    // Get active subscriptions from history (orders with Active status)
    const active = history.filter((order: any) => order.status === 'Active');
    setActiveSubscriptions(active);
  }, []);

  // Ensure the dashboard always loads from the top
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0 });
    } catch (e) {
      // fallback for environments where window is not available
      // no-op
    }
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Dashboard Content */}
      <div className="pt-32 pb-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">Your Dashboard</h1>
            <p className="text-3xl text-gray-500">Welcome back, {userName}!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Active Subscriptions */}
            <div className="lg:col-span-2">
              <div className="bg-[#d7d7d7] rounded-xl border border-gray-600 shadow-sm">
                {/* Gray Header */}
                <div className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-400 border border-black rounded-full mr-2"></div>
                    <h2 className="text-2xl font-bold text-gray-900">Your Active Subscriptions</h2>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">Active Subscriptions That You Have Permission To Access</p>
                </div>
                
                {/* White Content Body */}
                <div className="bg-white rounded-t-3xl rounded-b-xl p-4">
                  {activeSubscriptions.length > 0 ? (
                    <div className="space-y-4">
                      {activeSubscriptions.map((subscription, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{subscription.planName}</h3>
                            <span className="px-3 py-1 bg-gray-100 text-black border border-gray-500 rounded-full text-sm font-medium">
                              Active
                            </span>
                          </div>
                          
                          <div className="space-y-2 mb-3">
                            <p className="flex items-center text-xs text-gray-700">
                              <Clock className="w-4 h-4 text-gray-500 mr-1"/>
                              Purchased on {formatDate(subscription.purchaseDate || subscription.orderedDate)}
                            </p>
                            <p className="flex items-center text-xs text-gray-600">
                              <CalendarX className="w-4 h-4 text-gray-500 mr-1"/>
                               Expires on {formatDate(new Date(new Date(subscription.purchaseDate || subscription.orderedDate).getTime() + 365 * 24 * 60 * 60 * 1000).toISOString())}
                            </p>
                          </div>
                          
                          <button className="px-4 py-1.5 bg-gray-100 text-gray-900 border border-gray-500 font-semibold rounded-lg cursor-pointer text-sm">
                            Access Now
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="mb-6">
                        <div className="w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-4">
                          <img src="/icon-b.svg" alt="" />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">No Active Subscriptions</h3>
                        <p className="text-gray-600 mb-6">Opps! You Don,t Have Any Active Subscriptions Right Now.</p>
                      </div>
                      
                      <button 
                        onClick={() => navigate('/plans')}
                        className="px-8 py-3 bg-blue-600 font-serif text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Browse Plan
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Pending Orders */}
              {pendingOrders.length > 0 && (
                <div className="bg-gray-200 rounded-xl border border-gray-600 shadow-sm mt-6">
                  <div className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-orange-400 border border-black rounded-full mr-2"></div>
                      <h2 className="text-2xl font-bold text-gray-900">Pending Orders</h2>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">Orders that are waiting for admin approval</p>
                  </div>
                  
                  <div className="bg-white rounded-t-3xl rounded-b-xl p-4">
                    <div className="space-y-4">
                      {pendingOrders.map((order, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold text-gray-900">{order.planName} Plan</h3>
                            <span className="px-3 py-1 bg-gray-100 text-black rounded-full border border-gray-500 text-sm font-medium">
                              {order.status}
                            </span>
                          </div>
                          <p className="flex items-center text-sm text-gray-500">
                            <ClockFading className="w-4 h-4 text-gray-500 mr-1" />
                            <span>Ordered on {formatDate(order.orderedDate)}</span>
                          </p>
                        </div>
                      ))}
                      
                      <div className="mt-4 p-4 bg-red-50 rounded-lg">
                        <p className="text-sm font-medium text-red-500">
                        Pending Orders are usually approved within 24 hours. You'll get access once approved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Order History */}
              {orderHistory.length > 0 && (
                <div className="bg-gray-200 rounded-xl border border-gray-600 shadow-sm mt-6">
                  <div className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-400 border border-black rounded-full mr-2"></div>
                      <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">All your past orders and their status</p>
                  </div>
                  
                  <div className="bg-white rounded-t-3xl rounded-b-xl p-4">
                    <div className="overflow-x-auto">
                      <table className="min-w-full table-auto text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 text-xs">Plan Name</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 text-xs">Purchase Date</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 text-xs">Original Price</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 text-xs">Discount Price</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 text-xs">Final Price</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 text-xs">Status</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 text-xs">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderHistory.map((order, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="py-2 px-3">
                                <span className="font-medium text-gray-900 text-xs">{order.planName}</span>
                              </td>
                              <td className="py-2 px-3">
                                <span className="text-gray-600 text-xs">{formatDate(order.purchaseDate || order.orderedDate)}</span>
                              </td>
                              <td className="py-2 px-3">
                                <span className="text-gray-700 text-xs">{order.originalPrice || order.price}</span>
                              </td>
                              <td className="py-2 px-3">
                                <span className="text-gray-700 text-xs">{order.discountPrice || '0'}</span>
                              </td>
                              <td className="py-2 px-3">
                                <span className="text-gray-900 font-medium text-xs">{order.finalPrice || order.price}</span>
                              </td>
                              <td className="py-2 px-3">
                                <span className={`px-2 py-1 rounded-full border border-gray-500 text-xs font-medium ${
                                  order.status === 'Pending' 
                                    ? 'bg-gray-100 text-black'
                                    : order.status === 'Active'
                                    ? 'bg-gray-100 text-black' 
                                    : 'bg-gray-100 text-black'
                                }`}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-2 px-3">
                                <button className="flex items-center p-1 px-2 rounded bg-black text-white text-xs cursor-pointer hover:bg-gray-800 transition-colors">
                                  <Download className="w-3 h-3 mr-1" />
                                  PDF
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Profile & Quick Links */}
            <div className="space-y-6">
              
              {/* Your Profile */}
              <div className="bg-black rounded-xl overflow-hidden border border-gray-400 shadow-sm">
                <div className="px-6 py-5 flex items-center text-white">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                    <User2Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-semibold">Your Profile</h3>
                </div>

                <div className="bg-white rounded-b-xl rounded-t-2xl border-t border-gray-200">
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Name</label>
                      <p className="text-gray-900 font-semibold">{userName}</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="text-gray-900 font-semibold">{userEmail}</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500">Account Status</label>
                      <p className="text-gray-900 font-semibold">Active</p>
                    </div>

                    <button onClick={handleLogout} className="w-full mt-2 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors text-sm">
                      Log Out
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-200 rounded-xl overflow-hidden border border-gray-400 shadow-sm">
                <div className="px-6 py-4">
                  <div className="flex items-center">
                    <ChevronRight className="w-6 h-6 text-gray-700 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
                  </div>
                </div>
                
                <div className="bg-white rounded-b-xl rounded-t-2xl border-t border-gray-200">
                  <div className="p-4 space-y-3">
                    <button 
                      onClick={() => navigate('/plans')}
                      className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors w-full text-left"
                    >
                      <Clipboard className="w-5 h-5 text-gray-500 mr-3" />
                      <span className="text-gray-700 font-medium">Browse Plan</span>
                    </button>
                    
                    <a href="#" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
                      <MessageCircle className="w-5 h-5 text-gray-500 mr-3" />
                      <span className="text-gray-700 font-medium">WhatsApp Support</span>
                    </a>
                    
                    <a href="#" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
                      <MessageCircle className="w-5 h-5 text-gray-500 mr-3" />
                      <span className="text-gray-700 font-medium">WhatsApp Support</span>
                    </a>
                    
                    <a href="#" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
                      <Users className="w-5 h-5 text-gray-500 mr-3" />
                      <span className="text-gray-700 font-medium">WhatsApp Group</span>
                    </a>
                    
                    <a href="#" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                      <Plane className="w-5 h-5 text-gray-500 mr-3" />
                      <span className="text-gray-700 font-medium">Telegram Channel</span>
                    </a>
                    
                    <a href="#" className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                      <Users className="w-5 h-5 text-gray-500 mr-3" />
                      <span className="text-gray-700 font-medium">Telegram Group</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardPage;