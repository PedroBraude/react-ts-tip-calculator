export const formatCurrency = (
  quantity: number,
  locale: 'es-AR' | 'en-US',
  currency: 'USD' | 'ARS'
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  });
  return formatter.format(quantity);
};
