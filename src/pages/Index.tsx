import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, BookOpen, FileText, Settings, LogOut, Menu, X, TrendingUp, Award, AlertCircle } from 'lucide-react';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');

  // Sample data
  const dashboardStats = [
    { label: 'Total Students', value: '847', icon: Users, color: 'bg-blue-500' },
    { label: 'Teachers', value: '42', icon: Users, color: 'bg-green-500' },
    { label: 'Courses', value: '28', icon: BookOpen, color: 'bg-purple-500' },
    { label: 'Avg. Performance', value: '78%', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const performanceData = [
    { month: 'Jan', average: 72, target: 80 },
    { month: 'Feb', average: 75, target: 80 },
    { month: 'Mar', average: 78, target: 80 },
    { month: 'Apr', average: 76, target: 80 },
    { month: 'May', average: 81, target: 80 },
    { month: 'Jun', average: 79, target: 80 },
  ];

  const classDistribution = [
    { name: 'Form 1', value: 210 },
    { name: 'Form 2', value: 198 },
    { name: 'Form 3', value: 205 },
    { name: 'Form 4', value: 234 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  const recentStudents = [
    { id: 1, name: 'John Kipchoge', class: 'Form 4A', status: 'Active' },
    { id: 2, name: 'Sarah Mwangi', class: 'Form 3B', status: 'Active' },
    { id: 3, name: 'Michael Okonkwo', class: 'Form 2A', status: 'Active' },
    { id: 4, name: 'Grace Kariuki', class: 'Form 1C', status: 'On Leave' },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'teachers', label: 'Teachers', icon: Users },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg lg:hidden"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meda Imana School
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-lg">
              <AlertCircle size={20} className="text-slate-600" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg text-slate-700">
              <span className="text-sm font-medium">Admin User</span>
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'w-64' : 'w-0'
          } bg-slate-900 text-white transition-all duration-300 overflow-hidden lg:w-64`}
        >
          <nav className="p-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentView === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'hover:bg-slate-800'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {currentView === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow text-base font-medium text-lime-500"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
                          <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                        </div>
                        <div className={`${stat.color} p-3 rounded-lg`}>
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Performance Chart */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                  <h2 className="text-lg font-bold text-slate-900 mb-6">Performance Trend</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="month" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          border: 'none',
                          borderRadius: '8px',
                          color: '#fff',
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="average"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6', r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="#10b981"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Class Distribution */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                  <h2 className="text-lg font-bold text-slate-900 mb-6">Class Distribution</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={classDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {classDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Students */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-6">Recent Students</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">Class</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentStudents.map((student) => (
                        <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-3 px-4 text-slate-900">{student.name}</td>
                          <td className="py-3 px-4 text-slate-600">{student.class}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                student.status === 'Active'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {student.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                              View
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

          {/* Placeholder Sections */}
          {currentView !== 'dashboard' && (
            <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                <AlertCircle size={32} className="text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {menuItems.find((m) => m.id === currentView)?.label}
              </h2>
              <p className="text-slate-600">This feature will be available soon.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
