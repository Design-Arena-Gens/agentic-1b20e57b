"use client";

import { useEffect, useMemo, useState } from "react";
import { generateMql5ExpertAdvisor } from "@/lib/mql5/generator";

const defaultState = {
  symbol: "_Symbol",
  timeframe: "PERIOD_M15",
  lot: 0.1,
  stopLossPoints: 200,
  takeProfitPoints: 400,
  trailingStopPoints: 0,
  template: "custom" as "custom" | "ma" | "rsi" | "breakout",
  maFast: 9,
  maSlow: 21,
  rsiPeriod: 14,
  rsiBuy: 30,
  rsiSell: 70,
  breakoutBars: 20,
};

export default function GeneratorPage() {
  const [state, setState] = useState(defaultState);
  const [code, setCode] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("template");
    if (t === "ma" || t === "rsi" || t === "breakout") {
      setState((s) => ({ ...s, template: t }));
    }
  }, []);

  const codeText = useMemo(() => {
    return generateMql5ExpertAdvisor({
      ...state,
    });
  }, [state]);

  useEffect(() => setCode(codeText), [codeText]);

  function onDownload() {
    const blob = new Blob([codeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `EA_${state.template}.mq5`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="card">
      <h1 style={{marginTop:0}}>Gerador de EA (MQL5)</h1>

      <div className="form-row">
        <div>
          <label className="label">Template</label>
          <select
            className="input"
            value={state.template}
            onChange={(e) => setState({ ...state, template: e.target.value as any })}
          >
            <option value="custom">Personalizado</option>
            <option value="ma">Cruzamento de M?dias</option>
            <option value="rsi">RSI Revers?o</option>
            <option value="breakout">Breakout de Faixa</option>
          </select>
        </div>
        <div>
          <label className="label">Timeframe</label>
          <select
            className="input"
            value={state.timeframe}
            onChange={(e) => setState({ ...state, timeframe: e.target.value })}
          >
            <option>PERIOD_M1</option>
            <option>PERIOD_M5</option>
            <option>PERIOD_M15</option>
            <option>PERIOD_M30</option>
            <option>PERIOD_H1</option>
            <option>PERIOD_H4</option>
          </select>
        </div>
      </div>

      <div className="form-row" style={{marginTop:12}}>
        <div>
          <label className="label">Lote</label>
          <input className="input" type="number" step="0.01" value={state.lot} onChange={(e) => setState({ ...state, lot: Number(e.target.value) })} />
        </div>
        <div>
          <label className="label">SL (pontos)</label>
          <input className="input" type="number" value={state.stopLossPoints} onChange={(e) => setState({ ...state, stopLossPoints: Number(e.target.value) })} />
        </div>
      </div>

      <div className="form-row" style={{marginTop:12}}>
        <div>
          <label className="label">TP (pontos)</label>
          <input className="input" type="number" value={state.takeProfitPoints} onChange={(e) => setState({ ...state, takeProfitPoints: Number(e.target.value) })} />
        </div>
        <div>
          <label className="label">Trailing Stop (pontos, 0=off)</label>
          <input className="input" type="number" value={state.trailingStopPoints} onChange={(e) => setState({ ...state, trailingStopPoints: Number(e.target.value) })} />
        </div>
      </div>

      {state.template === "ma" && (
        <div className="form-row" style={{marginTop:12}}>
          <div>
            <label className="label">MA R?pida</label>
            <input className="input" type="number" value={state.maFast} onChange={(e) => setState({ ...state, maFast: Number(e.target.value) })} />
          </div>
          <div>
            <label className="label">MA Lenta</label>
            <input className="input" type="number" value={state.maSlow} onChange={(e) => setState({ ...state, maSlow: Number(e.target.value) })} />
          </div>
        </div>
      )}

      {state.template === "rsi" && (
        <div className="form-row" style={{marginTop:12}}>
          <div>
            <label className="label">Per?odo RSI</label>
            <input className="input" type="number" value={state.rsiPeriod} onChange={(e) => setState({ ...state, rsiPeriod: Number(e.target.value) })} />
          </div>
          <div>
            <label className="label">Comprar abaixo de</label>
            <input className="input" type="number" value={state.rsiBuy} onChange={(e) => setState({ ...state, rsiBuy: Number(e.target.value) })} />
          </div>
          <div>
            <label className="label">Vender acima de</label>
            <input className="input" type="number" value={state.rsiSell} onChange={(e) => setState({ ...state, rsiSell: Number(e.target.value) })} />
          </div>
        </div>
      )}

      {state.template === "breakout" && (
        <div className="form-row" style={{marginTop:12}}>
          <div>
            <label className="label">Barras para faixa</label>
            <input className="input" type="number" value={state.breakoutBars} onChange={(e) => setState({ ...state, breakoutBars: Number(e.target.value) })} />
          </div>
        </div>
      )}

      <div style={{marginTop:16, display:'flex', gap:12}}>
        <button className="button" onClick={onDownload}>Baixar .mq5</button>
        <a className="button secondary" href="https://www.mql5.com/en/articles/100" target="_blank" rel="noreferrer">Como instalar EA</a>
      </div>

      <h3 style={{marginTop:24}}>C?digo MQL5</h3>
      <pre><code>{code}</code></pre>
    </div>
  );
}
