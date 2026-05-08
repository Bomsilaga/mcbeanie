'use client';

import Header from '@/components/Header';
import { useState } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  stock: number;
  price: number;
  color: string;
}

const initialInventory: InventoryItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: `prod-${i + 1}`,
  name: `LV Beanie ${i + 1}`,
  stock: Math.floor(Math.random() * 10),
  price: 150 + i * 30,
  color: ['Black', 'Grey', 'Navy', 'Brown', 'Burgundy', 'White', 'Cream', 'Olive', 'Tan', 'Charcoal'][i],
}));

export default function InventoryPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<InventoryItem | null>(null);

  const handleEdit = (item: InventoryItem) => {
    setEditingId(item.id);
    setEditData({ ...item });
  };

  const handleSave = () => {
    if (editData && editingId) {
      setInventory(inventory.map((item) => (item.id === editingId ? editData : item)));
      setEditingId(null);
      setEditData(null);
    }
  };

  const handleDelete = (id: string) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const totalValue = inventory.reduce((sum, item) => sum + item.price * item.stock, 0);
  const totalItems = inventory.reduce((sum, item) => sum + item.stock, 0);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Inventory Management</h1>
          <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            <Plus size={20} />
            Add Product
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Total Items in Stock</p>
            <p className="text-3xl font-bold">{totalItems}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Total Inventory Value</p>
            <p className="text-3xl font-bold">${totalValue.toFixed(2)}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Products Listed</p>
            <p className="text-3xl font-bold">{inventory.length}</p>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Product Name</th>
                <th className="px-6 py-3 text-left font-semibold">Color</th>
                <th className="px-6 py-3 text-left font-semibold">Price</th>
                <th className="px-6 py-3 text-left font-semibold">Stock</th>
                <th className="px-6 py-3 text-left font-semibold">Value</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium">
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={editData?.name || ''}
                        onChange={(e) => setEditData({ ...editData!, name: e.target.value })}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td className="px-6 py-3">
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={editData?.color || ''}
                        onChange={(e) => setEditData({ ...editData!, color: e.target.value })}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      item.color
                    )}
                  </td>
                  <td className="px-6 py-3">
                    {editingId === item.id ? (
                      <input
                        type="number"
                        value={editData?.price || 0}
                        onChange={(e) => setEditData({ ...editData!, price: parseFloat(e.target.value) })}
                        className="border rounded px-2 py-1 w-24"
                      />
                    ) : (
                      `$${item.price}`
                    )}
                  </td>
                  <td className="px-6 py-3">
                    {editingId === item.id ? (
                      <input
                        type="number"
                        value={editData?.stock || 0}
                        onChange={(e) => setEditData({ ...editData!, stock: parseInt(e.target.value) })}
                        className="border rounded px-2 py-1 w-16"
                      />
                    ) : (
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${item.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {item.stock}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 font-medium">${(item.price * item.stock).toFixed(2)}</td>
                  <td className="px-6 py-3 flex gap-2">
                    {editingId === item.id ? (
                      <>
                        <button onClick={handleSave} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
                          Save
                        </button>
                        <button onClick={() => setEditingId(null)} className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 text-sm">
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(item)} className="text-blue-600 hover:text-blue-700">
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-700">
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
