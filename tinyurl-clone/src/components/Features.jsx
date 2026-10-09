 import analyticsImage from "./feature-1-DBj-yszF.webp";
import feature2 from "./feature-2-CK8gMGGN.webp";
import feature3 from "./feature-3-DxHuNqyl.webp";
import feature4 from "./feature-4-B9Ltz0dA.webp";

const Features = () => {
  const features = [
    {
      title: "Detailed Link Analytics",
      desc: "Stay on top of your links' performance and get insights into the clicks you earn and people you reach.",
      image: analyticsImage,
    },
    {
      title: "Fully Branded Domains",
      desc: "Customize every part of your links with branded domains — say goodbye to default link shortening!",
      image: feature2,
    },
    {
      title: "Bulk Short URLs",
      desc: "Scale your communications with our API, and create thousands of unique short links in the blink of an eye.",
      image: feature3,
    },
    {
      title: "Link Management",
      desc: "Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.",
      image: feature4,
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-[#1b2430] mb-20">
          TinyURL Plans Include:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {features.map((item, index) => (
            <div key={index}>

              <h3 className="text-[22px] font-bold text-[#1b2430] leading-tight">
                {item.title}
              </h3>

              <p className="mt-6 text-[18px] leading-10 text-[#374151]">
                {item.desc}
              </p>

              {/* Image */}
              <div className="mt-10 w-full h-[230px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;