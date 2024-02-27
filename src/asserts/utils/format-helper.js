export const wheelDriveFormatter = (wheelDrive) => {
  switch (wheelDrive) {
    case "front": {
      return "Front-Wheel-Drive";
    }
    case "rear": {
      return "Rear-Wheel-Drive";
    }
    case "all": {
      return "All-Wheel-Drive";
    }
    default:
      return undefined;
  }
};

export const wheelDriveShortFormatter = (wheelDrive) => {
  switch (wheelDrive) {
    case "front": {
      return "FWD";
    }
    case "rear": {
      return "RWD";
    }
    case "all": {
      return "AWD";
    }
    default:
      return undefined;
  }
};

export const numberFormatter = (value) =>
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const documentNameFormatter = (car) => {
  const nameArray = [];

  if (car.title) {
    nameArray.push(car.title);
  }

  if (car.year) {
    nameArray.push(car.year);
  }

  if (car.wheelDrive) {
    nameArray.push(wheelDriveShortFormatter(car.wheelDrive));
  }

  return nameArray.join(".");
};
