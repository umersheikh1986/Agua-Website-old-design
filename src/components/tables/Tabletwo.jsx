import Image from "next/image";

const productData = [
  {
    image: "/user-01.png",
    name: "Martin",
    category: "Electronics",
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: "/user-01.png",
    name: "Leach",
    category: "Electronics",
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: "/user-01.png",
    name: "Ricky",
    category: "Electronics",
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: "/user-01.png",
    name: "Kane",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const TableTwo = () => {
  return (
    <div
      id="Black"
      className="rounded-b-xl border border-[#D2D8E1] bg-[#D2D8E1] shadow-default dark:border-[#24303F] dark:bg-boxdark"
    >
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-gray-500 dark:text-white">
          Black Listed
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium dark:text-white">Users</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium dark:text-white">Wallet Address</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium dark:text-white">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium dark:text-white">Sold</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium dark:text-white">Profit</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={product.image}
                  width={60}
                  height={50}
                  alt="Product"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.category}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${product.price}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.sold}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">${product.profit}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
