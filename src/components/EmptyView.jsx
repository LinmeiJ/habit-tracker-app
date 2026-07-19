export default function EmptyView({ title, description, icon }) {
  return (
    <section className="panel empty-view">
      <div className="empty-view__icon" aria-hidden="true">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="primary-button">Explore feature</button>
    </section>
  );
}
