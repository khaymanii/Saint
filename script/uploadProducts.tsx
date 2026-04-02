import { collection, writeBatch, doc } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { PRODUCTS } from "@/data/shop";

export const uploadProducts = async () => {
  try {
    const batch = writeBatch(db);

    PRODUCTS.forEach((product) => {
      const docRef = doc(collection(db, "products"));

      batch.set(docRef, product, { merge: true });
    });

    await batch.commit();

    console.log("✅ All products uploaded successfully!");
  } catch (error) {
    console.error("❌ Upload failed:", error);
  }
};
