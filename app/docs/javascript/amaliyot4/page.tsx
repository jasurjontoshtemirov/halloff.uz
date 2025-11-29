"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function JavaScriptAmaliyot4Page() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-6">
          <span className="text-2xl">🚀</span>
          <span className="text-green-300 font-semibold">AMALIYOT DARSI</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-100 mb-4">Amaliyot #4: CRUD TodoList LocalStorage Amaliyot</h1>
        <p className="text-xl text-gray-400">To&apos;liq CRUD operatsiyalari bilan TodoList yaratish</p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">CRUD nima?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-6 border border-blue-500/20">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">C - Create</h3>
            <p className="text-gray-300 text-sm">Yangi malumot qoshish</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg p-6 border border-green-500/20">
            <h3 className="text-xl font-semibold text-green-400 mb-2">R - Read</h3>
            <p className="text-gray-300 text-sm">Malumotlarni oqish</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg p-6 border border-yellow-500/20">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">U - Update</h3>
            <p className="text-gray-300 text-sm">Malumotni ozgartirish</p>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-lg p-6 border border-red-500/20">
            <h3 className="text-xl font-semibold text-red-400 mb-2">D - Delete</h3>
            <p className="text-gray-300 text-sm">Malumotni ochirish</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">HTML</h2>
        <CodeBlock 
          language="html"
          code={`<!DOCTYPE html>
<html>
<head>
    <title>TodoList CRUD</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial; padding: 20px; background: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; }
        h1 { text-align: center; color: #333; margin-bottom: 30px; }
        .input-group { display: flex; gap: 10px; margin-bottom: 20px; }
        input { flex: 1; padding: 12px; border: 2px solid #ddd; border-radius: 5px; font-size: 16px; }
        button { padding: 12px 24px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; }
        button:hover { background: #2980b9; }
        .task { display: flex; align-items: center; gap: 10px; padding: 15px; background: #f9f9f9; margin-bottom: 10px; border-radius: 5px; }
        .task.done { opacity: 0.6; text-decoration: line-through; }
        .task-text { flex: 1; }
        .btn-edit { background: #f39c12; }
        .btn-delete { background: #e74c3c; }
        .btn-edit:hover { background: #e67e22; }
        .btn-delete:hover { background: #c0392b; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 TodoList</h1>
        <div class="input-group">
            <input type="text" id="taskInput" placeholder="Yangi vazifa...">
            <button onclick="addTask()">Qo'shish</button>
        </div>
        <div id="taskList"></div>
    </div>
</body>
</html>`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">JavaScript - To&apos;liq Kod</h2>
        <CodeBlock 
          language="javascript"
          code={`let tasks = [];

// LocalStorage dan yuklash
function loadTasks() {
    let saved = localStorage.getItem('tasks');
    if (saved) {
        tasks = JSON.parse(saved);
    }
    displayTasks();
}

// LocalStorage ga saqlash
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// CREATE - Yangi vazifa qo'shish
function addTask() {
    let input = document.getElementById('taskInput');
    let text = input.value.trim();
    
    if (text === '') {
        alert('Vazifa kiriting!');
        return;
    }
    
    let task = {
        id: Date.now(),
        text: text,
        done: false,
        createdAt: new Date().toLocaleString()
    };
    
    tasks.push(task);
    saveTasks();
    displayTasks();
    input.value = '';
}

// READ - Vazifalarni ko'rsatish
function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<p style="text-align: center; color: #999;">Vazifalar yo\\'q</p>';
        return;
    }
    
    tasks.forEach(task => {
        let taskDiv = document.createElement('div');
        taskDiv.className = 'task' + (task.done ? ' done' : '');
        
        taskDiv.innerHTML = \`
            <input type="checkbox" \${task.done ? 'checked' : ''} 
                   onchange="toggleTask(\${task.id})">
            <span class="task-text">\${task.text}</span>
            <button class="btn-edit" onclick="editTask(\${task.id})">✏️</button>
            <button class="btn-delete" onclick="deleteTask(\${task.id})">🗑️</button>
        \`;
        
        taskList.appendChild(taskDiv);
    });
}

// UPDATE - Vazifani o'zgartirish
function editTask(id) {
    let task = tasks.find(t => t.id === id);
    if (!task) return;
    
    let newText = prompt('Yangi matn:', task.text);
    if (newText && newText.trim() !== '') {
        task.text = newText.trim();
        saveTasks();
        displayTasks();
    }
}

// UPDATE - Bajarildi/Bajarilmadi
function toggleTask(id) {
    let task = tasks.find(t => t.id === id);
    if (task) {
        task.done = !task.done;
        saveTasks();
        displayTasks();
    }
}

// DELETE - Vazifani o'chirish
function deleteTask(id) {
    if (confirm('Rostdan ham o\\'chirmoqchimisiz?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        displayTasks();
    }
}

// Sahifa yuklanganda
window.addEventListener('load', loadTasks);

// Enter tugmasi bilan qo'shish
document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});`}
        />
      </div>

      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🎯</span>
          <h2 className="text-3xl font-semibold text-gray-100">Bonus Funksiyalar</h2>
        </div>
        
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-purple-400 mt-1">1.</span>
            <div><strong>Filter:</strong> Bajarilgan/Bajarilmagan vazifalarni filtrlash</div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 mt-1">2.</span>
            <div><strong>Search:</strong> Vazifalarni qidirish</div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 mt-1">3.</span>
            <div><strong>Sort:</strong> Sana boyicha saralash</div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 mt-1">4.</span>
            <div><strong>Statistics:</strong> Jami, bajarilgan, qolgan vazifalar soni</div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-400 mt-1">5.</span>
            <div><strong>Categories:</strong> Vazifalarni kategoriyalarga bolish</div>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/javascript/date" className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: New Date
        </Link>
        <Link href="/docs/javascript/test" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: TEST
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
