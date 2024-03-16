import React from "react";
import Slider from "../Modal/Slider";
import Card from "../Modal/Card";
// import { ProductItem } from "../Modal/Card";
import Images from "../Config/Images";
import productItems from "../../mockData/ProductiItems";
// import ExampleCarouselImage2 from "../../assets/images/t-shirtbanner.png";
// import ExampleCarouselImage3 from "../../assets/images/offsalecommon.png";
// import ExampleCarouselImage4 from "../../assets/images/offsalecommon.png";
// import ExampleCarouselImage5 from "../../assets/images/t-shirtbanner.png";
// import ExampleCarouselImage6 from "../../assets/images/buy999.jpg";

const maincards = [
  {
    img: Images.Maincard1,
    title: "Bestsellers",
  },
  {
    img: Images.Maincard2,
    title: "New Arrivals",
  },
  {
    img: Images.Maincard3,
    title: "Official Collaborations",
  },
  {
    img: Images.Maincard4,
    title: "Plus Size",
  },
  {
    img: Images.Maincard5,
    title: "Customization",
  },
  {
    img: Images.Maincard6,
    title: "Combos",
  },
  {
    img: Images.Maincard7,
    title: "Vote for Designs",
  },
  {
    img: Images.Maincard8,
    title: "Last Sizes Left",
  },
];
const trendingCategories = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-OS-T-Shirts-1706511994.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Classic-Fit-T-Shirts-1707280970.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/unnamed--5--1706513552.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-men-1706512292.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1704181405.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-Men-1707280970.jpg",
  },
];

const trendingCategories1 = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Oversized-T--shirts-1704270296-1706511259.webp",
  },

  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg",
  },

  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Casual-Pants-1706509180.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-1706509180.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Cargos-1704270812-1706511406.webp",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Dresses-1704270296-1706511533.webp",
  },
];
const bag = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Shirts-men--1706511997.jpg",
  },

  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Cargos-men-1706511996.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-1706514429.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-1707280972.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-women-1706514429.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1706509182.jpg",
  },
];
const accessories = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Mobile-covers-1705054649.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Sliders-1705043484.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Backpacks-1705043482.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Caps-1705043483.jpg",
  },
];
function Home() {
  const techItems1 = [
    <div className="slides">
      <img src={Images.ExampleCarouselImage1} />
    </div>,
    <div className="slides">
      <img src={Images.ExampleCarouselImage2} />
    </div>,
    <div className="slides">
      <img src={Images.ExampleCarouselImage3} />
    </div>,
  ];
  const techResponsive1 = {
    0: { items: 1 },
    350: { items: 2 },
    700: { items: 3 },
    1050: { items: 4 },
  };
  //
  const techResponsive2 = {
    0: { items: 1 },
    350: { items: 1 },
    700: { items: 4 },
    1050: { items: 4 },
  };
  const techItems2 = [
    <div className="slides">
      <img src="https://images.bewakoof.com/uploads/grid/app/1000070037-1707137668.jpg" />
    </div>,
    <div className="slides">
      <img src="https://images.bewakoof.com/uploads/grid/app/HD-PC-Size-Banner-480x457-1707137667.jpg" />
    </div>,
    <div className="slides">
      <img src="https://images.bewakoof.com/uploads/grid/app/American-PIMA-PC-Size-Banner-480x457-1707137667.jpg" />
    </div>,
    <div className="slides">
      <img src="https://images.bewakoof.com/uploads/grid/app/1000070037-1707137668.jpg" />
    </div>,
    <div className="slides">
      <img src="https://images.bewakoof.com/uploads/grid/app/HD-PC-Size-Banner-480x457-1707137667.jpg" />
    </div>,
    <div className="slides">
      <img src="https://images.bewakoof.com/uploads/grid/app/American-PIMA-PC-Size-Banner-480x457-1707137667.jpg" />
    </div>,
  ];
  //
  const techResponsive3 = {
    0: { items: 1 },
    350: { items: 2 },
    700: { items: 3 },
    1050: { items: 3 },
  };

  const productiItemsResponsive = {
    0: { items: 1 },
    350: { items: 2 },
    700: { items: 3 },
    1050: { items: 5 },
  };
  const techItems3 = [
    <div className="slides">
      <img src="https://images.bewakoof.com/uploads/grid/app/HC-BANNERS---1X1-RM---CROP-TOP--1--1709217894.png" />
    </div>,
    <div className="slides">
      <img src="https://images.bewakoof.com/uploads/grid/app/1x1-hc-pajama--1--1710138434.jpg" />
    </div>,
    <div className="slides">
      <img src="https://images.bewakoof.com/nav_menu/Casual-pants-Common-1x1-banner--2--1709878945.jpg" />
    </div>,
    <div className="slides">
      <img src="https://images.bewakoof.com/uploads/grid/app/FEB-1x1-SummerVests--2--1710244090.jpg" />
    </div>,
  ];

  return (
    <>
      <section className="page-content">
        <Slider items={techItems1} responsive={techResponsive1} />
        <div className="">
          <div className="main-card">
            <ul>
              {maincards.map((data, i) => {
                return (
                  <li>
                    <div key={i} className="small-wiget">
                      <img src={`${data.img}`} />
                      <h6>{data.title}</h6>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="banner1">
          <img src={Images.banner2} width="100%" />
        </div>
        <div className="cards m-10">
          <div className="heading">
            <h4>TRENDING CATEGORIES</h4>
          </div>
          <ul>
            {trendingCategories.map((data, i) => {
              return (
                <li>
                  <div key={i}>
                    <img src={`${data.img}`} width="100%" />
                  </div>
                </li>
              );
            })}
          </ul>
          <ul>
            {trendingCategories1.map((data, i) => {
              return (
                <li>
                  <div key={i}>
                    <img src={`${data.img}`} width="100%" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" m-10">
          <div className="heading">
            <h4>Bewakoof Originals</h4>
          </div>
          <Slider items={techItems2} responsive={techResponsive2} />
        </div>
        <div className="cards m-10">
          <div className="heading">
            <h4>TOO HOT TO BE MISSED</h4>
            <div className="row m-0">
              <div className="col-md-6 missed-product ">
                <img
                  src="https://images.bewakoof.com/nav_menu/MidSize-DESKTOP-b1g1-common-1709878524.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-6 missed-product ">
                <img
                  src="https://images.bewakoof.com/uploads/grid/app/DESKTOP-mid-size-SuperLooseTees--3--1709734300.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-6 p-0">
                <img
                  src="https://images.bewakoof.com/nav_menu/MidSize-DESKTOP-BF-women-1709878522.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-6 p-0">
                <img
                  src="https://images.bewakoof.com/nav_menu/DESKTOP-mid-size-breezyvests-1709878522.jpg"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cards m-10">
          <div className="heading">
            <h4>CATEGORIES TO BAG</h4>
          </div>
          <ul>
            {bag.map((data, i) => {
              return (
                <li>
                  <div key={i}>
                    <img src={`${data.img}`} width="100%" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <Slider items={techItems3} responsive={techResponsive3} />
        <div className="cards m-10">
          <div className="heading">
            <h4>TOP ACCESSORIES</h4>
          </div>
          <ul style={{ justifyContent: "center" }}>
            {accessories.map((data, i) => {
              return (
                <li>
                  <img src={`${data.img}`} width="100%" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="m-10">
          <div className="heading2">
            <h4>BESTSELLERS</h4>
          </div>
          <Slider responsive={productiItemsResponsive}>
            {productItems.map((data) => {
              return <Card data={data} className="ml-4" />;
            })}
          </Slider>

          {/* <Card /> */}
          <div className="exploreLine">
            <p>Explore All</p>
          </div>
        </div>
        <div className="cards m-10">
          <div className="heading">
            <h4>OUR BEST PICKS</h4>
            <div className="row m-0">
              <div className="col-md-6 missed-product ">
                <img
                  src="https://images.bewakoof.com/uploads/grid/app/720x420-Midsize-bannner-Combos--1--1704012294.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-6 missed-product ">
                <img
                  src="https://images.bewakoof.com/uploads/grid/app/Official-Merch-store-Desktop-banner-1700470826-1701771559.webp"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-6 p-0">
                <img
                  src="https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-banner-1704439012.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-6 p-0">
                <img
                  src="https://images.bewakoof.com/uploads/grid/app/Sizes-6xl-Plus-Size-Desktop-midsize-Banner-1706690349.jpg"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cards m-10">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg"
            width="100%"
            style={{ marginTop: "10px" }}
          />
          <img
            src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
            width="100%"
            style={{ marginTop: "10px" }}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
