import React from "react";
import Banner from "./Banner";

const index = () => {
  const data = [
    {
      id: "hboBanner",
      title: "HBO MAX Banner",
      image: "https://t.ly/XpbP0",
      buttonText: "Get HBO MAX",
    },
    {
      id: "offerBanner",
      title: "New Offers",
      image: "https://t.ly/i2J5i",
      buttonText: "Discover offers",
      href: "https://vodafone.ro/abonamente",
    },
    {
      id: "phoneBanner",
      title: "Get new phone",
      image: "https://t.ly/klU5K",
      buttonText: "Get your new phone here",
      href: "https://vodafone.ro/telefoane",
    },
  ];
  console.log("🚀 ~ index ~ data:", data);

  const bannerActions: Record<string, () => void> = {
    hboBanner: () => {
      window.alert("Pepeni");
    },
    default: () => {}, // Default empty handler
  };

  return (
    <div>
      {data.map((item, index) => {
        return (
          <Banner
            key={index}
            image={item.image}
            title={item.title}
            onClick={bannerActions[item.id] || bannerActions.default}
            buttonText={item.buttonText}
            href={item.href}
          />
        );
      })}
    </div>
  );
};

export default index;
