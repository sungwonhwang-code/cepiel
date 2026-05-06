"use client";

import { useMemo, useState } from "react";

/**
 * Toy non-isothermal CSTR.
 * Compute steady-state conversion x and reactor temperature T as a function
 * of feed temperature T0 and pre-exponential factor k0.
 *
 * Solving:
 *   F * (Cf - C) - V * k(T) * C = 0
 *   F * rho * cp * (T - T0) - V * k(T) * C * (-dH) = 0
 *
 * We do a simple bisection on conversion x = (Cf - C)/Cf.
 *
 * This is a teaching toy — not a real plant model. Numbers chosen for
 * stable, visually interesting behaviour, not physical accuracy.
 */
function steadyState({
  T0,
  k0,
}: {
  T0: number;
  k0: number;
}): { conversion: number; T: number } {
  const Ea = 50_000; // J/mol
  const R = 8.314;
  const F = 1.0; // m3/min
  const V = 1.0; // m3
  const Cf = 1.0; // mol/m3
  const dH = 80_000; // J/mol (exothermic)
  const rhoCp = 1_500_000; // J/(m3·K)

  const energyT = (x: number) => T0 + (Cf * dH * x) / rhoCp;
  const k = (T: number) => k0 * Math.exp(-Ea / (R * T));
  const massResidual = (x: number) => {
    const T = energyT(x);
    const lhs = F * Cf * x;
    const rhs = V * k(T) * Cf * (1 - x);
    return rhs - lhs;
  };

  let lo = 1e-6;
  let hi = 1 - 1e-6;
  let mid = 0.5;
  for (let i = 0; i < 80; i++) {
    mid = 0.5 * (lo + hi);
    const r = massResidual(mid);
    if (r > 0) lo = mid;
    else hi = mid;
  }
  const conversion = mid;
  const T = energyT(conversion);
  return { conversion, T };
}

export function DigitalTwinSandbox() {
  const [T0, setT0] = useState(320);
  const [k0Exp, setK0Exp] = useState(7); // log10 scale

  const k0 = Math.pow(10, k0Exp);
  const { conversion, T } = useMemo(
    () => steadyState({ T0, k0 }),
    [T0, k0]
  );

  return (
    <div className="space-y-6 font-mono text-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="block text-muted">
            Feed temperature T₀ — {T0.toFixed(0)} K
          </span>
          <input
            type="range"
            min={290}
            max={360}
            step={1}
            value={T0}
            onChange={(e) => setT0(parseFloat(e.target.value))}
            className="mt-1 w-full accent-accent"
          />
        </label>
        <label className="block">
          <span className="block text-muted">
            Pre-exponential k₀ — 10<sup>{k0Exp.toFixed(1)}</sup> 1/min
          </span>
          <input
            type="range"
            min={5}
            max={9}
            step={0.1}
            value={k0Exp}
            onChange={(e) => setK0Exp(parseFloat(e.target.value))}
            className="mt-1 w-full accent-accent"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Stat label="Steady-state conversion x" value={conversion.toFixed(3)} />
        <Stat label="Reactor temperature T" value={`${T.toFixed(1)} K`} />
      </div>

      {/* Conversion bar */}
      <div>
        <div className="mb-1 flex justify-between text-xs text-muted">
          <span>0%</span>
          <span>conversion</span>
          <span>100%</span>
        </div>
        <div className="h-2 overflow-hidden rounded bg-subtle">
          <div
            className="h-full bg-accent transition-[width]"
            style={{ width: `${conversion * 100}%` }}
          />
        </div>
      </div>

      <p className="text-xs text-muted">
        Toy non-isothermal CSTR. Dial T₀ up: see the runaway. Dial k₀ down:
        watch the reactor wash out. This is a teaching demo, not a real plant
        model.
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-subtle p-3">
      <div className="text-xs text-muted">{label}</div>
      <div className="mt-1 text-lg">{value}</div>
    </div>
  );
}
