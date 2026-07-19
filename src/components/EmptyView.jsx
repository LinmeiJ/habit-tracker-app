export default function EmptyView({ title, description, icon, actionLabel = 'Explore feature' }) {
  return (
    <section className="panel empty-view">
      <div className="empty-view__icon" aria-hidden="true">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="primary-button">{actionLabel}</button>
    </section>
  );
}
