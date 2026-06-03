// Clear side-by-side before/after comparison. Each photo is shown in full and
// unambiguously labelled, so it reads correctly even when the two shots are
// framed slightly differently.
export default function BeforeAfter({ before, after, title }) {
  return (
    <figure className="ba-pair">
      <div className="ba-grid">
        <div className="ba-frame">
          <img src={before} alt={`${title} — before detailing`} loading="lazy" />
          <span className="ba-tag before">Before</span>
        </div>
        <div className="ba-frame">
          <img src={after} alt={`${title} — after detailing`} loading="lazy" />
          <span className="ba-tag after">After</span>
        </div>
      </div>
      {title && <figcaption>{title}</figcaption>}
    </figure>
  )
}
