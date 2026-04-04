export const formatNigerianPhone = (phone: string) => {
  if (!phone) return "";

  let cleaned = phone.replace(/\D/g, ""); // remove non-digits

  // Handle leading 0 (e.g. 08012345678 → 8012345678)
  if (cleaned.startsWith("0")) {
    cleaned = cleaned.slice(1);
  }

  // Handle already formatted with 234
  if (cleaned.startsWith("234")) {
    return `+${cleaned}`;
  }

  // Assume Nigerian number
  return `+234${cleaned}`;
};
