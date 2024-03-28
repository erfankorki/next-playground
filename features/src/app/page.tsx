
import Link from "next/link";
import { useEffect } from "react";

export interface Currency {
  price: string;
  symbol: string;
}
export default async function HomePage() {

  const response = await fetch('https://api.binance.com/api/v3/ticker/price');
  const data: Currency[] = await response.json();
  return (
    <main className="min-h-screen flex items-center justify-center">
      <ul>
        {data.slice(0, 20).map((currency) => {
          return (
            <li key={currency.symbol}>
              <Link href={`/currency/${currency.symbol}`}>
                {currency.price}: {currency.symbol}
              </Link>

            </li>
          );
        })}
      </ul>

    </main>
  );
}