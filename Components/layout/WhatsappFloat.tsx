import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "2348166588402";

  const message = encodeURIComponent(
    "Hi 👋 I need help on Saint (size, order or delivery).",
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <div className="hidden sm:block bg-white text-xs text-gray-700 px-3 py-2 rounded-full shadow-md">
        Chat with us
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#063c71] shadow-lg hover:scale-105 transition"
      >
        <MessageCircle className="text-white w-7 h-7" />
      </a>
    </div>
  );
}
