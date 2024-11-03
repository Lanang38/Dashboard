import React from "react";
import { ChevronLast, ChevronFirst } from "lucide-react";

export default function RightSidebar({ right }) {
  return (
    <div className="w-1/6 p-3 bg-gray-50 text-gray-800">
      {/* Profile Section */}
      <div className="flex items-center mb-8">
        <img
          src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette.png" // Replace with actual image source
          alt="Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="text-sm font-medium">Azhar Rizqullah</h3>
        </div>
        <ul className="flex-1 px-3">{right}</ul>
      </div>

      {/* "Segera Datang" Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Segera Datang</h2>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 rounded-lg bg-gray-200 hover:bg-green-600 group">
            <ChevronFirst className="group-hover:text-white" />
          </button>
          <input
            type="text"
            placeholder="Masukkan Judul"
            className="flex-grow p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        {/* Perbaiki biar sesuai dengan desain
        <div className="flex items-center space-x-2">
            <button className="flex items-center text-sm text-gray-600">
            ➕ Fitur Baru
            </button>
                <button className="flex items-center text-sm text-gray-600">
                🗑️ Fitur
                </button>
        </div> 
            */}

      </div>

      {/* Sticky Notes Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Sticky Notes</h2>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 rounded-lg bg-gray-200 hover:bg-green-600 group">
            <ChevronFirst className="group-hover:text-white" />
          </button>
          <input
            type="text"
            placeholder="Masukkan Judul"
            className="flex-grow p-2 border border-gray-300 rounded text-sm"
          />
        
          
        </div>
        {/* Perbaiki biar sama kaya desain (satu tone warna juga boleh) kalau bisa jangan dijadikan button yang tidak bisa di klil, tetapi kasi buton delete di sampingnya
        <button className="w-full py-2 mb-2 text-white bg-green-500 rounded text-sm">
        Tambah Modul Baru
        </button>
        <button className="w-full py-2 mb-2 text-white bg-orange-500 rounded text-sm">
         Tambah Modul Baru
        </button>
        <button className="w-full py-2 mb-2 text-white bg-red-500 rounded text-sm">
        Tambah Modul Baru
        </button>
        <button className="w-full py-2 text-white bg-pink-500 rounded text-sm">
        Tambah Modul Baru
        </button>

        */}
      </div>
    </div>
  );
}
