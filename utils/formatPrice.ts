export default function formatPrice(price: number) {
  return Intl.NumberFormat('ru-RU', {
    'currency': 'RUB',
    style: 'currency',
    maximumFractionDigits: 0,
  }).format(price)
}
