import { ACCESS_TOKEN } from '../../config.json';

export const handleIntregrationMP = async (cartItems) => {
  const preferencia = {
    items: cartItems.map((item) => ({
      id: 1,
      title: 'Dispositivo móvil',
      description: 'Dispositivo móvil de Tienda e-commerce',
      category_id: 'electronics',
      quantity: 1,
      currency_id: 'COP', // Asegúrate de usar la moneda correcta
      unit_price: 3200,
    })),
    payer: {
      name: 'Lalo',
      surname: 'Landa',
      email: 'testgmial.com',
    },
    back_urls: {
      success: 'https://www.success.com',
      pending: 'https://www.pending.com',
      failure: 'https://www.failure.com',
    },
    auto_return: 'approved',
  };

  try {
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferencia),
    });
    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Network response was not ok: ${response.status} - ${errorDetails}`);
    }
    const data = await response.json();
    return data.init_point;
  } catch (error) {
    console.error('Error creating preference:', error);
    throw error;
  }
};
