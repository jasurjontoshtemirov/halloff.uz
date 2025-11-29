import Link from "next/link";
import { Cloud, Rocket, Server, Globe, CheckCircle, AlertCircle } from "lucide-react";

export default function DeploymentPage() {
  return (
    <div className="min-h-screen bg-[#010336]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white">Bosh sahifa</Link>
          <span>/</span>
          <Link href="/docs" className="hover:text-white">Dokumentatsiya</Link>
          <span>/</span>
          <span className="text-white">Deploy</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Deploy qilish
          </h1>
          <p className="text-xl text-gray-400">
            Loyihangizni production ga chiqarish bo'yicha to'liq qo'llanma. Vercel, Netlify va boshqa platformalar.
          </p>
        </div>

        {/* Deployment Platforms */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <Cloud className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Vercel</h3>
            <p className="text-sm text-gray-400">Next.js uchun eng yaxshi</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Netlify</h3>
            <p className="text-sm text-gray-400">Tez va oson</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AWS</h3>
            <p className="text-sm text-gray-400">Katta loyihalar uchun</p>
          </div>
        </div>
      </div>
    </div>
  );
}
