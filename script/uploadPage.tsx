"use client";

import { uploadProducts } from "./uploadProducts";

export default function UploadPage() {
  return (
    <div className="p-10">
      <button
        onClick={uploadProducts}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Upload Products to Firestore
      </button>
    </div>
  );
}
