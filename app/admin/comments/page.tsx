'use client';

export default function AdminCommentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Izohlar</h1>
            </div>

            <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 text-center">
                <div className="text-gray-400 mb-2">
                    <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <h3 className="text-lg font-medium text-white">Hozircha izohlar yo'q</h3>
                    <p className="mt-1">Bu bo'lim tez orada ishga tushadi.</p>
                </div>
            </div>
        </div>
    );
}
