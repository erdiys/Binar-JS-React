function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const populateCars = (cars) => {
  return cars.map((car) => {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    const availableAt = new Date(
      timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
    );
    const typeDriver = isPositive ? "Lepas Kunci" : "Dengan Supir";
    const capacity = getRandomInt(2, 8);
    if (car.name == "Innova") {
      car.image =
        "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/4674690068575/6-Hours-INNOVA-REBORN-Car-Rental-Includes-Driver-32dfefb9-a283-44a5-a429-f7c7d62b4d44.png?tr=q-60,c-at_max,w-1280,h-720&_src=imagekit";
    }
    return {
      ...car,
      capacity,
      typeDriver,
      availableAt,
    };
  });
};

const listCars = async (inputData) => {
  let cars;
  let cachedCarsString = localStorage.getItem("CARS");

  if (!cachedCarsString === null) {
    const cacheCars = JSON.parse(cachedCarsString);
    cars = populateCars(cacheCars);
  } else {
    const response = await fetch(
      "https://api-car-rental.binaracademy.org/customer/car"
    );
    const body = await response.json();
    cars = populateCars(body);

    localStorage.setItem("CARS", JSON.stringify(cars));
  }

  const filteredCars = cars.filter((el) => {
    return inputData.capacity
      ? el.capacity >= inputData.capacity
      : true &&
          el.typeDriver === inputData.typeDriver &&
          el.availableAt >= new Date(inputData.tanggal) &&
          el.availableAt.getHours() >= Number(inputData.waktu);
  });
  return filteredCars;
};

export { listCars };
