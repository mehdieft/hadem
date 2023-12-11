import { Chrono } from "react-chrono";
import firstImage from "../../assets/images/timeline/1.jpg";
const TimeLineComponent = () => {
  const items = [
    {
      title: "سی و یکم شهریور ماه 1359",
      cardSubtitle: "عملیات دفاع 34 روزه از خرمشهر",
      cardDetailedText: "اولین عملیات دفاع مقدس",
      media: {
        type: "IMAGE",
        source: {
          url: firstImage,
        },
      },
    },
    {
      title: "چهاردهم مهر ماه سال 1359",
      cardSubtitle: "عملیات تاخت شبانه در پل نوشهر",
      cardDetailedText:
        "این عملیات از سوی گردان یکم تکاوران دریایی برای انهدام متجاوزان و تاخیر در پیشروی آن ها اجرا شد",
      media: {
        type: "IMAGE",
        source: {
          url: firstImage,
        },
      },
    },
    {
      title: "بیست و چهارم دی 1359",
      cardSubtitle: "عملیات آفند و پدافند در محور ماهشهر_آبادان (عملیات شفق)",
      cardDetailedText:
        "این عملیات از 1359/10/24 با تحویل مواضع از یگان های ژاندارمری آغاز شد وتا 1360/4/10 با عقب نشینی اجباری دشمن ارز جنوب محور آبادان به ماهشهر خاتمه یافت",
      media: {
        type: "IMAGE",
        source: {
          url: firstImage,
        },
      },
    },
    {
      title: "نهم آبان 1359",
      cardSubtitle:
        "عملیات اشکان",
      cardDetailedText:
        "این عملیات برای انهدام تجهیزات حساس انتقال نفت به نفتکش ها و نیز انهدام نیروهای مستقر یا مدافع رژیم بعثی در ترمینال های نفتی به اجرا در آمد.",
      media: {
        type: "IMAGE",
        source: {
          url: firstImage,
        },
      },
    },
    {
      title: "سیزدهم آبان 1359",
      cardSubtitle:
        "عملیات شهید صفری",
      cardDetailedText:
       "انگیزه اصلی عملیات تصرف و انهدام ترمینال البکر بود و در کنار آن اهداف دیگری نیز دنبال میشد این عملیات از 1359/8/13 تا 1359/8/16 به طول انجامید.",
      media: {
        type: "IMAGE",
        source: {
          url: firstImage,
        },
      },
    },
    {
      title: "هفتم آذر 1359 ",
      cardSubtitle:
        "عملیات مروارید",
      cardDetailedText:
        "عملیات مروارید در حقیقت نقطه عطفی در تاریخ نبردهای دریایی جمهوری اسلامی ایران با رژیم بعث بود که با پشتیبانی قوی تیزپروازان نیروی هوایی ارتش جمهوری اسلامی ایران به انهدام شناورهای و هواپیما های دشمن انجامید.",
      media: {
        type: "IMAGE",
        source: {
          url: firstImage,
        },
      },
    },
  ];
  return (
    <div style={{ backgroundColor: "rgb(1 32 44)" }}>
      <Chrono
      className="my-timeline"
        cardWidth="600"
        cardHeight="700"
        mediaHeight="500"
        style={{ direction: "rtl", fontFamily: "iranSans" }}
        timelinePointShape="diamond"
        fontSizes={{
          cardSubtitle: "1.85rem",
          cardText: "14.8rem",
          cardTitle: "1rem",
          title: "1.3rem",
          cardDetailedText:'1.6rem'
        }}
        theme={{
          primary: "#ff7b00",
          secondary: "black",
          cardBgColor: "#468d51",
          titleColor: "white",
          titleColorActive: "white",
        }}
        scrollable={{ scrollbar: true }}
        items={items}
        classNames={{
          card: 'my-card',
          cardMedia: 'my-card-media',
          cardSubTitle: 'my-card-subtitle',
          cardText: 'my-card-text',
          cardTitle: 'my-card-title',
          controls: 'my-controls',
          title: 'my-title',
        }}
      />
    </div>
  );
};
export default TimeLineComponent;
