// import React, { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";

// const PieChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     let root;

//     const initChart = async () => {
//       if (!chartRef.current) return;

//       const am5 = await import("@amcharts/amcharts5");
//       const am5percent = await import("@amcharts/amcharts5/percent");
//       const am5themes_Animated = await import("@amcharts/amcharts5/themes/Animated");

//       // Initialize root
//       root = am5.Root.new(chartRef.current);

//       // Apply themes
//       root.setThemes([am5themes_Animated.default.new(root)]);

//       // Create PieChart
//       const chart = root.container.children.push(
//         am5percent.PieChart.new(root, {
//           radius: am5.percent(90),
//           innerRadius: am5.percent(50),
//         })
//       );

//       // Create PieSeries
//       const series = chart.series.push(
//         am5percent.PieSeries.new(root, {
//           valueField: "value",
//           categoryField: "category",
//         })
//       );

//       // Set data
//       series.data.setAll([
//         { category: "Category A", value: 40 },
//         { category: "Category B", value: 25 },
//         { category: "Category C", value: 20 },
//         { category: "Category D", value: 15 },
//       ]);

//       // Animate slices
//       series.slices.template.setAll({
//         strokeOpacity: 0,
//         strokeWidth: 2,
//         cornerRadius: 5,
//       });

//       series.slices.template.states.create("hover", {
//         scale: 1.1,
//         strokeWidth: 3,
//       });

//       // Animation for series appearance
//       series.appear(1000, 100);

//       // Animate slices individually
//       series.slices.template.adapters.add("fillGradient", (fillGradient, target) => {
//         return am5.RadialGradient.new(root, {
//           stops: [
//             { brighten: -0.3 },
//             { brighten: -0.1 },
//             { brighten: 0.1 },
//           ],
//         });
//       });

//       // Add Legend
//       const legend = chart.children.push(
//         am5.Legend.new(root, {
//           centerX: am5.percent(50),
//           x: am5.percent(50),
//           layout: root.horizontalLayout,
//         })
//       );

//       legend.data.setAll(series.dataItems);
//     };

//     initChart();

//     return () => {
//       if (root) root.dispose();
//     };
//   }, []);

//   return <div ref={chartRef} style={{ width: "100%", height: "500px" }} />;
// };

// export default dynamic(() => Promise.resolve(PieChart), { ssr: false });
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import CanvasScene from "./Animate";

const Exampl = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <>
      <section
        ref={targetRef}
        className="relative h-[300vh] bg-gradient-radial gradient-bg"
      >
        {/* <img
          src="/Animate-9.png"
          className="absolute top-0 left-0 w-full h-full opacity-30 object-cover z-0"
        /> */}
        {/* <CanvasScene /> */}
        <h1 className="font-merry text-5xl md:text-6xl  text-yellow-400 text-center pt-6 ">
          Operations
        </h1>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
      <hr className="border-2 border-[#D2BA57]" />
    </>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative md:h-[450px] md:w-[450px] h-[350px] w-[300px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default Exampl;

const cards = [
  {
    url: "/picture1.png",
    // title: "Title 1",
    id: 1,
  },
  {
    url: "/picture2.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/picture3.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/picture4.png",
    title: "Title 4",
    id: 4,
  },
];
