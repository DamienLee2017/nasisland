"use client";
import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  HardDrive, 
  MessageSquare, 
  Settings, 
  Menu,
  X,
  Search,
  Plus,
  Star,
  Download,
  Share2,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NASCommunity = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedThreads, setExpandedThreads] = useState({});

  // 模拟数据
  const popularThreads = [
    {
      id: '1',
      title: '群晖DS920+开箱及初步设置指南',
      author: 'NAS爱好者',
      date: '2024-02-15',
      views: 1248,
      replies: 56,
      content: '本文详细介绍了群晖DS920+的开箱过程、硬件安装、系统初始化设置以及常用套件安装指南...',
      isSticky: true
    },
    {
      id: '2',
      title: '威联通TS-453D与群晖DS920+对比评测',
      author: '技术达人',
      date: '2024-02-14',
      views: 892,
      replies: 32,
      content: '从硬件配置、系统功能、性能表现等多个维度对比了两款热门4盘位NAS设备...',
      isSticky: true
    },
    {
      id: '3',
      title: 'TrueNAS Core安装教程及插件推荐',
      author: '开源爱好者',
      date: '2024-02-13',
      views: 673,
      replies: 28,
      content: '分享TrueNAS Core的安装过程、基础配置以及我个人推荐的实用插件...'
    },
    {
      id: '4',
      title: '家庭NAS网络优化方案讨论',
      author: '网络工程师',
      date: '2024-02-12',
      views: 542,
      replies: 19,
      content: '探讨如何优化家庭网络环境以提升NAS访问速度，包括有线/无线网络配置建议...'
    }
  ];

  const toggleThreadExpand = (threadId) => {
    setExpandedThreads(prev => ({
      ...prev,
      [threadId]: !prev?.[threadId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* 顶部导航栏 */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <HardDrive className="text-blue-600 h-6 w-6 mr-2" />
            <h1 className="text-xl font-semibold text-gray-800">NAS岛~NAS爱好者社区</h1>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex items-center ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Home className="h-5 w-5 mr-1" /> 首页
            </button>
            <button 
              onClick={() => setActiveTab('forum')}
              className={`flex items-center ${activeTab === 'forum' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <MessageSquare className="h-5 w-5 mr-1" /> 交流区
            </button>
            <button 
              onClick={() => setActiveTab('resources')}
              className={`flex items-center ${activeTab === 'resources' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Download className="h-5 w-5 mr-1" /> 资源区
            </button>
            <button 
              onClick={() => setActiveTab('community')}
              className={`flex items-center ${activeTab === 'community' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Users className="h-5 w-5 mr-1" /> 开发区
            </button>

            <button 
              onClick={() => setActiveTab('transaction')}
              className={`flex items-center ${activeTab === 'transaction' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <HardDrive className="h-5 w-5 mr-1" /> 交易区
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="搜索NAS相关内容..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <button 
              className="md:hidden text-gray-600 p-1 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <button 
                onClick={() => {
                  setActiveTab('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center py-2 px-3 rounded-lg ${activeTab === 'home' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Home className="h-5 w-5 mr-3" /> 首页
              </button>
              <button 
                onClick={() => {
                  setActiveTab('forum');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center py-2 px-3 rounded-lg ${activeTab === 'forum' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <MessageSquare className="h-5 w-5 mr-3" /> 交流区
              </button>
              <button 
                onClick={() => {
                  setActiveTab('resources');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center py-2 px-3 rounded-lg ${activeTab === 'resources' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Download className="h-5 w-5 mr-3" /> 资源区
              </button>
              <button 
                onClick={() => {
                  setActiveTab('community');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center py-2 px-3 rounded-lg ${activeTab === 'community' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Users className="h-5 w-5 mr-3" /> 开发区
              </button>

              <button 
                onClick={() => {
                  setActiveTab('transaction');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center py-2 px-3 rounded-lg ${activeTab === 'community' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <HardDrive className="h-5 w-5 mr-3" /> 交易区
              </button>
              
              <div className="relative pt-2">
                <input
                  type="text"
                  placeholder="搜索..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 主内容区 */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            {/* 欢迎横幅 */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 md:p-8 text-white">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">欢迎来到NAS岛~NAS爱好者社区</h2>
                <p className="text-blue-100 mb-6">
                  这里是NAS设备爱好者、家庭存储解决方案探索者和数据管理专家的聚集地。分享您的经验，获取最新资讯，与志同道合的朋友交流。
                </p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  加入讨论
                </button>
              </div>
            </div>

            {/* 热门讨论 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                  热门讨论
                </h2>
                <button className="text-blue-600 hover:text-blue-800 flex items-center">
                  <Plus className="h-4 w-4 mr-1" /> 新建话题
                </button>
              </div>
              
              <div className="space-y-4">
                {popularThreads?.map(thread => (
                  <div 
                    key={thread?.id} 
                    className={`border rounded-lg overflow-hidden ${thread?.isSticky ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}
                  >
                    <div 
                      className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-start"
                      // onClick={() => toggleThreadExpand(thread?.id)}
                    >
                      <div>
                        <div className="flex items-center mb-1">
                          {thread?.isSticky && (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded mr-2">置顶</span>
                          )}
                          <h3 className="font-medium">{thread?.title}</h3>
                        </div>
                        <div className="text-sm text-gray-500">
                          <span>{thread?.author}</span>
                          <span className="mx-2">•</span>
                          <span>{thread?.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-3">{thread?.views}浏览</span>
                        <span>{thread?.replies}回复</span>
                        {expandedThreads?.[thread?.id] ? (
                          <ChevronDown className="h-5 w-5 ml-2 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 ml-2 text-gray-400" />
                        )}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedThreads?.[thread?.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-4 pb-4"
                        >
                          <div className="pt-2 border-t border-gray-200 text-gray-700">
                            {thread?.content}
                          </div>
                          <div className="mt-3 flex space-x-3">
                            <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                              <MessageSquare className="h-4 w-4 mr-1" /> 回复
                            </button>
                            <button className="text-gray-600 hover:text-gray-800 text-sm flex items-center">
                              <Star className="h-4 w-4 mr-1" /> 收藏
                            </button>
                            <button className="text-gray-600 hover:text-gray-800 text-sm flex items-center">
                              <Share2 className="h-4 w-4 mr-1" /> 分享
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* 资源推荐 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Download className="h-5 w-5 mr-2 text-blue-500" />
                热门资源
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 h-40 flex items-center justify-center">
                    <HardDrive className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">群晖DSM使用手册</h3>
                    <p className="text-sm text-gray-500 mb-3">最新版群晖系统使用指南</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">PDF • 5.2MB</span>
                      <button className="text-blue-600 hover:text-blue-800">下载</button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 h-40 flex items-center justify-center">
                    <HardDrive className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">威联通QTS优化指南</h3>
                    <p className="text-sm text-gray-500 mb-3">提升威联通NAS性能的技巧</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">PDF • 3.8MB</span>
                      <button className="text-blue-600 hover:text-blue-800">下载</button>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 h-40 flex items-center justify-center">
                    <HardDrive className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">TrueNAS插件合集</h3>
                    <p className="text-sm text-gray-500 mb-3">精选TrueNAS实用插件</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">ZIP • 12.4MB</span>
                      <button className="text-blue-600 hover:text-blue-800">下载</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'forum' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">论坛</h2>
            <p className="text-gray-600">论坛功能开发中...</p>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">资源中心</h2>
            <p className="text-gray-600">资源中心功能开发中...</p>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">开发者中心</h2>
            <p className="text-gray-600">软件开发者功能开发中...</p>
          </div>
        )}

      {activeTab === 'transaction' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">交易中心</h2>
            <p className="text-gray-600">交易区功能开发中...</p>
          </div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <div className="mb-2">
            <a 
              href="https://nasisland.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              created by nasisland
            </a>
          </div>
          <div>当前为静态demo，后端接口创建对接中</div>
        </div>
      </footer>
    </div>
  );
};

export default NASCommunity;