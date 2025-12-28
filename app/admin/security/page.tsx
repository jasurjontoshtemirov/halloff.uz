"use client";

import AdminWrapper from "../components/AdminWrapper";
import { useState, useEffect } from "react";
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Ban, 
  Activity,
  TrendingUp,
  Lock,
  Unlock,
  RefreshCw,
  Download
} from "lucide-react";

interface SecurityEvent {
  timestamp: string;
  ip: string;
  type: string;
  data: any;
  severity: string;
}

interface SecurityStats {
  totalEvents: number;
  suspiciousIPs: string[];
  blockedIPs: string[];
  recentEvents: SecurityEvent[];
  topThreats: { ip: string; count: number }[];
  securityScore: number;
}

export default function SecurityPage() {
  const [stats, setStats] = useState<SecurityStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    loadSecurityStats();
    
    if (autoRefresh) {
      const interval = setInterval(loadSecurityStats, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const loadSecurityStats = async () => {
    try {
      const response = await fetch('/api/security/monitor');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to load security stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const blockIP = async (ip: string) => {
    try {
      await fetch('/api/security/monitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'block_ip',
          ip,
          data: { reason: 'Manual block by admin' }
        })
      });
      loadSecurityStats();
    } catch (error) {
      console.error('Failed to block IP:', error);
    }
  };

  const unblockIP = async (ip: string) => {
    try {
      await fetch('/api/security/monitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'unblock_ip',
          ip,
          data: { reason: 'Manual unblock by admin' }
        })
      });
      loadSecurityStats();
    } catch (error) {
      console.error('Failed to unblock IP:', error);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-500/20';
      case 'HIGH': return 'text-orange-400 bg-orange-500/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-blue-400 bg-blue-500/20';
    }
  };

  if (loading) {
    return (
      <AdminWrapper>
        <div className="p-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Xavfsizlik ma'lumotlari yuklanmoqda...</p>
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
              <Shield className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-3xl font-bold text-white">Xavfsizlik Monitoring</h1>
                <p className="text-gray-400">Real-time xavfsizlik holati va tahdidlar</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${
                  autoRefresh 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-gray-600 hover:bg-gray-700 text-white'
                }`}
              >
                <Activity className="w-4 h-4" />
                {autoRefresh ? 'Auto Refresh ON' : 'Auto Refresh OFF'}
              </button>
              
              <button
                onClick={loadSecurityStats}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Yangilash
              </button>
            </div>
          </div>
        </div>

        {stats && (
          <>
            {/* Security Score */}
            <div className="mb-8">
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Xavfsizlik Reytingi</h3>
                    <p className="text-gray-400">So'nggi 24 soat ichidagi xavfsizlik holati</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-4xl font-bold ${getScoreColor(stats.securityScore)}`}>
                      {stats.securityScore}/100
                    </div>
                    <div className="text-sm text-gray-400">
                      {stats.securityScore >= 90 ? 'Excellent' : 
                       stats.securityScore >= 70 ? 'Good' : 'Needs Attention'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
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
                    <p className="text-2xl font-bold text-yellow-400">{stats.suspiciousIPs.length}</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-yellow-400" />
                </div>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Bloklangan IP'lar</p>
                    <p className="text-2xl font-bold text-red-400">{stats.blockedIPs.length}</p>
                  </div>
                  <Ban className="w-8 h-8 text-red-400" />
                </div>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Top Tahdidlar</p>
                    <p className="text-2xl font-bold text-purple-400">{stats.topThreats.length}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
              </div>
            </div>

            {/* Recent Events */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
                <div className="p-6 border-b border-[#30363d]">
                  <h3 className="text-xl font-semibold text-white">So'nggi Hodisalar</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {stats.recentEvents.map((event, index) => (
                    <div key={index} className="p-4 border-b border-[#30363d] hover:bg-[#0f0f0f] transition">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(event.severity)}`}>
                          {event.severity}
                        </span>
                        <span className="text-xs text-gray-400">
                          {new Date(event.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-sm text-white mb-1">{event.type}</div>
                      <div className="text-xs text-gray-400">IP: {event.ip}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Threats */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
                <div className="p-6 border-b border-[#30363d]">
                  <h3 className="text-xl font-semibold text-white">Eng Ko'p Tahdid Keltirayotgan IP'lar</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {stats.topThreats.map((threat, index) => (
                    <div key={index} className="p-4 border-b border-[#30363d] hover:bg-[#0f0f0f] transition">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-white font-medium">{threat.ip}</div>
                          <div className="text-xs text-gray-400">{threat.count} ta hodisa</div>
                        </div>
                        <div className="flex items-center gap-2">
                          {stats.blockedIPs.includes(threat.ip) ? (
                            <button
                              onClick={() => unblockIP(threat.ip)}
                              className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
                              title="IP'ni blokdan chiqarish"
                            >
                              <Unlock className="w-4 h-4" />
                            </button>
                          ) : (
                            <button
                              onClick={() => blockIP(threat.ip)}
                              className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                              title="IP'ni bloklash"
                            >
                              <Lock className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </AdminWrapper>
  );
}