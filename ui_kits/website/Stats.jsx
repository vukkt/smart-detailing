/* global React */

function Stats() {
  const items = [
    { value: '12', suffix: 'YRS',  label: 'In Operation' },
    { value: '2,400', suffix: '+', label: 'Cars Detailed' },
    { value: '4.96',  suffix: '★', label: 'Google Reviews' },
    { value: '7',     suffix: 'YR', label: 'Ceramic Warranty' },
  ];
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="container">
        <div className="stats">
          {items.map((s) => (
            <div className="stat" key={s.label}>
              <div className="value">{s.value}<em>{s.suffix}</em></div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Stats = Stats;
