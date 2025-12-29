"use client";

import AdminWrapper from "../../components/AdminWrapper";
import { useState, useEffect } from "react";
import { 
  Shield, 
  AlertTriangle, 
  Ban, 
  Activity,
  Eye,
  Trash2,
  RefreshCw,
  Download,
  Filter,
  Search
} from "lucide-react";

interface IntrusionEvent {
  timestamp: string;
  ip: string;
  type: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  data: any;
  blocked: boolean;
}

interface IntrusionStats {
  totalEvents: number;
  suspiciousIPs: number;
  blockedIPs: number;
  recentEvents: number;
}

export default function IntrusionDetectionPage() {
  const [events, setEvents] = useState<IntrusionEvent[]>([]);
  const [stats, setStats] = useState<IntrusionStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');
  const [severityFilter, setSeverityFilter] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    loadIntrusionData();
    const interval = setInterval(loadIntrusionData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const loadIntrusionData = async () => {
    try {
      const response = await fetch('/api/security/intrusion');
      if (response.ok) {
        const data = await response.json();
        setEvents(data.events || []);
        setStats(data.stats || null);
      }
    } catch (error) {
      console.error('Failed to load intrusion data:', error);
    } finally {
      setLoading(false);
    }
  };

  const blockIP = async (ip: string) => {
    try {
      await fetch('/api/security/intrusion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'block_ip',
          ip,
          data: { reason: 'Manual block from IDS panel' }
        })
      });
      loadIntrusionData();
    } catch (error) {
      console.error('Failed to block IP:', error);
    }
  };

  const unblockIP = async (ip: string) => {
    try {
      await fetch('/api/security/intrusion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'unblock_ip',
          ip,
          data: { reason: 'Manual unblock from IDS panel' }
        })
      });
      loadIntrusionData();
    } catch (error) {
      console.error('Failed to unblock IP:', error);
    }
  };

  const clearEvents = async () => {
    if (confirm('Barcha hodisalarni o\'chirmoqchimisiz?')) {
      try {
        await fetch('/api/security/intrusion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'clear_events' })
        });
        loadIntrusionData();
      } catch (error) {
        console.error('Failed to clear events:', error);
      }
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'HIGH': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      default: return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
    }
  };

  const getTypeIcon = (type: string) => {
    if (type.includes('SQL')) return '🛡️';
    if (type.includes('XSS')) return '⚠️';
    if (type.includes('COMMAND')) return '💀';
    if (type.includes('BRUTE')) return '🔨';
    if (type.includes('TRAVERSAL')) return '📁';
    return '🚨';
  };

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesType = !filter || event.type.toLowerCase().includes(filter.toLowerCase());
    const matchesSeverity = !severityFilter || event.severity === severityFilter;
    const matchesSearch = !searchTerm || 
      event.ip.includes(searchTerm) || 
      event.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      JSON.stringify(event.data).toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesType && matchesSeverity && matchesSearch;
  });

  if (loading) {
    return (
      <AdminWrapper>
        <div className="p-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">IDS ma'lumotlari yuklanmoqda...</p>
            </div>
          </div>
        </div>
      </AdminWrapper>
    );
  }

  return (
    <AdminWrapper>
      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-400" />
              <div>
                <h1 className="text-3xl font-bold text-white">Intrusion Detection System</h1>
                <p className="text-gray-400">Real-time tahdid aniqlash va himoya tizimi</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={loadIntrusionData}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Yangilash
              </button>
              
              <button
                onClick={clearEvents}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Tozalash
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Jami Hodisalar</p>
                  <p className="text-2xl font-bold text-white">{stats.totalEvents}</p>
                </div>
                <Activity className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Shubhali IP'lar</p>
                  <p className="text-2xl font-bold text-yellow-400">{stats.suspiciousIPs}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
              </div>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Bloklangan IP'lar</p>
                  <p className="text-2xl font-bold text-red-400">{stats.blockedIPs}</p>
                </div>
                <Ban className="w-8 h-8 text-red-400" />
              </div>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">So'nggi Soat</p>
                  <p className="text-2xl font-bold text-purple-400">{stats.recentEvents}</p>
                </div>
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                <Search className="w-4 h-4 inline mr-2" />
                Qidiruv
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="IP, tur yoki ma'lumot bo'yicha qidiring..."
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                <Filter className="w-4 h-4 inline mr-2" />
                Tahdid Turi
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="">Barchasi</option>
                <option value="SQL_INJECTION">SQL Injection</option>
                <option value="XSS">XSS</option>
                <option value="COMMAND_INJECTION">Command Injection</option>
                <option value="PATH_TRAVERSAL">Path Traversal</option>
                <option value="BRUTE_FORCE">Brute Force</option>
                <option value="SUSPICIOUS">Suspicious Activity</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Jiddiylik Darajasi
              </label>
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="">Barchasi</option>
                <option value="CRITICAL">Critical</option>
                <option value="HIGH">High</option>
                <option value="MEDIUM">Medium</option>
                <option value="LOW">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
          <div className="p-6 border-b border-[#30363d]">
            <h3 className="text-xl font-semibold text-white">
              Tahdid Hodisalari ({filteredEvents.length})
            </h3>
          </div>
          
          <div className="max-h-[600px] overflow-y-auto">
            {filteredEvents.length === 0 ? (
              <div className="p-8 text-center">
                <Shield className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Hech qanday tahdid aniqlanmadi</p>
              </div>
            ) : (
              filteredEvents.map((event, index) => (
                <div key={index} className="p-4 border-b border-[#30363d] hover:bg-[#0f0f0f] transition">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{getTypeIcon(event.type)}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(event.severity)}`}>
                          {event.severity}
                        </span>
                        <span className="text-sm text-gray-400">
                          {new Date(event.timestamp).toLocaleString()}
                        </span>
                        {event.blocked && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded border border-red-500/30">
                            BLOCKED
                          </span>
                        )}
                      </div>
                      
                      <div className="mb-2">
                        <h4 className="text-white font-medium">{event.type.replace(/_/g, ' ')}</h4>
                        <p className="text-sm text-gray-400">IP: {event.ip}</p>
                      </div>
                      
                      {event.data && (
                        <div className="bg-[#0f0f0f] rounded-lg p-3 mt-2">
                          <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-x-auto">
                            {JSON.stringify(event.data, null, 2)}
                          </pre>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      {event.blocked ? (
                        <button
                          onClick={() => unblockIP(event.ip)}
                          className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
                          title="IP'ni blokdan chiqarish"
                        >
                          <Shield className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => blockIP(event.ip)}
                          className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                          title="IP'ni bloklash"
                        >
                          <Ban className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AdminWrapper>
  );
}