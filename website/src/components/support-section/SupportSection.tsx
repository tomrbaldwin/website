import "./support-section.css";
import SectionHeading from "../section-heading/SectionHeading";

const supportItems = [
  {
    title: "MYANMAR NOW",
    description:
      "<span style='font-weight: bold;'>Myanmar Now</span> publishes independent, daily news and investigations covering the country's humanitarian crisis. Journalists face extreme risk in Myanmar and need financial support to get news out of the country. Myanmar Now’s photojournalist, <a href='https://myanmar-now.org/en/news/myanmar-now-photographer-other-prisoners-subjected-to-retaliatory-torture-in-yangon-prison/' target='_blank'>Sai Zaw Thaike</a> is one of tens-of-thousands of political prisoners in Myanmar. Join Amnesty International’s campaign to free him <a href='https://www.amnesty.org/en/petition/free-myanmar-photojournalist-sai-zaw/' target='_blank'>here</a>, and support Myanmar Now's crucial work by making a <a href='https://myanmar-now.org/en/donate/' target='_blank'>donation</a>, or <a href='https://myanmar-now.org/en/subscribe/' target='_blank'>subscribing</a> to stay informed.",
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
