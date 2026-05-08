import "./support-section.css";
import SectionHeading from "../section-heading/SectionHeading";

const supportItems = [
  {
    title: "MYANMAR NOW",
    description:
      "Myanmar Now is an underground, independent news agency from Myanmar. Their journalists publish daily news and investigations into the military’s war crimes from on-the-ground and exile. The military dictatorship has caused a humanitarian crisis, largely overlooked in international media. Myanmar Now’s photojournalist, Sai Zaw Thaike is one of tens-of-thousands of political prisoners in Myanmar. He is experiencing torture and ill health while being denied medical treatment. You can join Amnesty International’s campaign to free him here. It is critical that the world hears independent voices during this crisis. Myanmar’s free press work in extreme risk and desperately need support. Please make a donation, or subscribe to Myanmar Now to stay informed.",
  },
  {
    title: "Community Forum",
    description:
      "Join our community forum to discuss topics, share ideas, and get help from other users.",
  },
  {
    title: "Documentation",
    description:
      "Browse our comprehensive documentation and guides to find answers and learn more.",
  },
  {
    title: "Live Chat",
    description:
      "Chat with our support team in real-time for immediate assistance and quick answers.",
  },
];

const SupportSection = () => {
  return (
    <section className="support-section">
      <SectionHeading title="SUPPORT" />
      <div className="support-grid">
        {supportItems.map((item) => (
          <div key={item.title} className="support-card">
            <h3 className="support-card-title">{item.title}</h3>
            <p className="support-card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportSection;
