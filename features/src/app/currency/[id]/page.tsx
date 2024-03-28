import { Currency } from "@/app/page";
import {PageConfig} from 'next'


const CurrencyPage = async ({ params }: { params: { id: string } }) => {
    const response = await fetch('https://api.binance.com/api/v3/ticker/price');
    const data: Currency[] = await response.json();

    const currency = data.filter(currency => currency.symbol === params.id);
    return (
        <main>
            <article>
                <p>
                    {currency[0].symbol}:  {currency[0].price}
                </p>

            </article>
        </main>
    );
}

export async function generateStaticParams() {
    const currencies = await Promise.resolve(['ETHBTC', 'BNBBTC'])

    return currencies.map((currency) => ({
        id: currency,
    }))
}

export default CurrencyPage;