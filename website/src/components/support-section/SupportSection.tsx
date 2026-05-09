import "./support-section.css";
import SectionHeading from "../section-heading/SectionHeading";

const supportItems = [
  {
    title: "MYANMAR NOW",
    description:
      "<span style='font-weight: bold;'>Myanmar Now</span> is an underground, independent news agency. Their journalists publish daily news and investigations into the military’s war crimes from on-the-ground and exile. The military dictatorship has created an ongoing humanitarian crisis, largely overlooked in international media. Myanmar Now’s photojournalist, Sai Zaw Thaike is one of tens-of-thousands of political prisoners in Myanmar. He is experiencing torture and ill health while being denied medical treatment. You can join Amnesty’s campaign to free him here. It is critical that the world hears independent voices during this crisis. Myanmar’s free press face extreme risk and desperately need financial support. You can make a donation, or <a href='https://myanmar-now.org/en/subscribe/' target='_blank'>subscribe</a> to Myanmar Now to stay informed.",
  },
  {
    title: "LOCAL FLORA",
    description:
      "Local Flora is a biodiversity atlas for plant species. It aims to make indigenous species available everywhere. See Local Flora lite at localflora.org",
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
            <p
              className="support-card-description"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportSection;
