type SpecTableProps = {
  /** Column headers (mono, uppercase). */
  columns: string[];
  /** Row cells, aligned to `columns`. First cell reads as the row label. */
  rows: string[][];
  /** Optional caption rendered below the table. */
  caption?: string;
  className?: string;
};

/**
 * §6 — a responsive monospace spec grid for the technical panels (source range,
 * head variants, …). Hairline `--line` borders, tabular numerals, and a
 * horizontal scroll container so a wide table never breaks the page layout.
 * Mono type is the "this is data" signal.
 */
export function SpecTable({ columns, rows, caption, className = "" }: SpecTableProps) {
  return (
    <figure className={`w-full ${className}`}>
      <div className="w-full overflow-x-auto">
        <table className="tnum w-full min-w-[640px] border-collapse font-mono text-[0.8125rem]">
          <thead>
            <tr className="border-b border-line">
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="mono-label whitespace-nowrap px-4 py-3 text-left align-bottom text-steel-500 first:pl-0"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-line last:border-b-0">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`whitespace-nowrap px-4 py-3.5 first:pl-0 ${
                      j === 0 ? "font-medium text-ink" : "text-ink-soft"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <figcaption className="mono-label mt-3 text-steel-500">{caption}</figcaption>
      )}
    </figure>
  );
}
