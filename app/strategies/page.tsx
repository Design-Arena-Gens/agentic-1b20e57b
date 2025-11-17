import Link from "next/link";

export default function StrategiesPage() {
  return (
    <div className="card">
      <h1 style={{marginTop:0}}>Estrat?gias Populares</h1>
      <div className="grid">
        <div className="card">
          <h3>Cruzamento de M?dias (MA Cross)</h3>
          <p>
            Compra quando a m?dia r?pida cruza acima da m?dia lenta; vende no
            cruzamento oposto.
          </p>
          <Link href="/generator?template=ma" className="button">Usar no Gerador</Link>
        </div>
        <div className="card">
          <h3>RSI Revers?o</h3>
          <p>
            Compra em sobre-venda (RSI abaixo do limiar); vende em sobre-compra.
          </p>
          <Link href="/generator?template=rsi" className="button">Usar no Gerador</Link>
        </div>
        <div className="card">
          <h3>Breakout de Faixa</h3>
          <p>
            Entra na dire??o do rompimento ap?s consolida??o definida por N barras.
          </p>
          <Link href="/generator?template=breakout" className="button">Usar no Gerador</Link>
        </div>
      </div>
    </div>
  );
}
