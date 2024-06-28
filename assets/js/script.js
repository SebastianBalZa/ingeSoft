// JavaScript para la calculadora de conversión de criptomonedas
function convert() {
    const cryptoAmount = parseFloat(document.getElementById('cryptoAmount').value);
    const cryptoCurrency = document.getElementById('cryptoCurrency').value;
    const fiatCurrency = document.getElementById('fiatCurrency').value;

    const exchangeRates = {
        'BTC': {
            'USD': 30000,
            'EUR': 25000,
            'CLP': 20000000
        },
        'ETH': {
            'USD': 2000,
            'EUR': 1800,
            'CLP': 10000000
        },
        'XRP': {
            'USD': 0.5,
            'EUR': 0.45,
            'CLP': 5000000
        }
        // Agrega más criptomonedas y tasas de cambio según necesites
    };

    if (cryptoCurrency in exchangeRates && fiatCurrency in exchangeRates[cryptoCurrency]) {
        const exchangeRate = exchangeRates[cryptoCurrency][fiatCurrency];
        const result = cryptoAmount * exchangeRate;
        document.getElementById('conversionResult').textContent = `${cryptoAmount} ${cryptoCurrency} son aproximadamente ${result.toFixed(2)} ${fiatCurrency}`;
    } else {
        document.getElementById('conversionResult').textContent = 'No se pudo obtener la tasa de cambio.';
    }
}
