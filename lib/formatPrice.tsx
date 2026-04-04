export const formatPrice = (
  amount: number,
  options?: {
    currency?: string;
    locale?: string;
    showDecimals?: boolean;
  },
) => {
  const {
    currency = "NGN",
    locale = "en-NG",
    showDecimals = false,
  } = options || {};

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  }).format(amount);
};
