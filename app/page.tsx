export default function Page() {
  return (
    <div className="hero">
      <div className="card">
        <h1 style={{marginTop:0}}>MT5 Strategy Toolkit</h1>
        <p>
          Construa e exporte Rob?s Expert Advisors (MQL5) a partir de
          par?metros simples. Explore estrat?gias prontas e adapte-as ao seu
          estilo de trading.
        </p>
        <div style={{display:'flex', gap:12, marginTop:16}}>
          <a className="button" href="/generator">Gerar EA</a>
          <a className="button secondary" href="/strategies">Ver Estrat?gias</a>
        </div>
      </div>
      <div className="card">
        <h3 style={{marginTop:0}}>Recursos</h3>
        <ul>
          <li>Templates: Cruzamento de M?dias, RSI, Breakout</li>
          <li>Gerador de c?digo MQL5 completo (.mq5)</li>
          <li>Gest?o de risco: lote, SL/TP, trailing</li>
        </ul>
      </div>
    </div>
  );
}
