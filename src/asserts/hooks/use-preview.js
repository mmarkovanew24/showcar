import { Margin, usePDF } from "react-to-pdf";
import { useDispatch, useSelector } from "react-redux";
import { selectCarInfo } from "../../app/reducer";
import { useEffect, useMemo, useRef, useState } from "react";
import { wheelDriveFormatter } from "../utils/format-helper";

export function usePreview() {
  const [height, setHeight] = useState(0);
  const { toPDF, targetRef } = usePDF({
    filename: "page.pdf",
    page: { margin: Margin.NONE },
  }); // todo - create name from props
  const previewRef = useRef(null);
  const car = useSelector(selectCarInfo);
  const dispatch = useDispatch();

  const additionalInfo = useMemo(() => {
    const infoArray = [];

    if (car.engine > 0) {
      infoArray.push(`${car.engine} L`);
    }

    if (car.wheelDrive !== "") {
      infoArray.push(wheelDriveFormatter(car.wheelDrive));
    }

    if (car.transmissionAutomatic !== null) {
      infoArray.push(
        `${car.transmissionAutomatic ? "Automatic" : "Manual"} Transmission`
      );
    }

    return infoArray;
  }, [car.engine, car.wheelDrive, car.transmissionAutomatic]);

  useEffect(() => {
    setHeight(previewRef.current?.offsetHeight);
  }, [previewRef.current, previewRef.current?.offsetHeight]);

  return {
    additionalInfo,
    car,
    toPDF,
    height,
    setHeight,
    previewRef,
    targetRef,
  };
}
