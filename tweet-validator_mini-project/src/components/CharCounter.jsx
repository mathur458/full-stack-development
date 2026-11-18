const WARNING_AT = 20; 

function CharCounter({ count, max }) {
  const remaining = max - count;

  let status = "ok";
  if (remaining < 0) {
    status = "over";
  } else if (remaining <= WARNING_AT) {
    status = "warning";
  }

  return (
    <p className={`counter counter-${status}`} aria-live="polite">
      <span className="counter-used">
        {count} / {max}
      </span>
      <span className="counter-left">
        {remaining >= 0
          ? `${remaining} left`
          : `${Math.abs(remaining)} over the limit`}
      </span>
    </p>
  );
}

export default CharCounter;
