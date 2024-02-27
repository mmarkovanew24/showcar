import { Image, QRCode } from "antd";
import phoneImg from "../asserts/images/phone.png";
import { calculateImageWidth } from "../asserts/utils/calculate-helper";
import { numberFormatter } from "../asserts/utils/format-helper";
import {
  StyledPreviewContainer,
  PreviewContainer,
  PaperContainer,
  TitleInfo,
  ImagesContainer,
  ImageCard,
  DescriptionContainer,
  DownloadButton,
  TitleH2,
  TitleH4,
  ContactContainer,
} from "../asserts/styles/preview";
import { usePreview } from "../asserts/hooks/use-preview";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export const Preview = () => {
  const { additionalInfo, car, toPDF, height, previewRef, targetRef } =
    usePreview();

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  // A4 size: 2480 x 3508 pixels
  return (
    <StyledPreviewContainer>
      <Document>
        <Page size="A4" style={styles.page}>
          <TitleInfo>
            {car.title !== "" && <span>{car.title}</span>}
            {car.year > 0 && <span>{car.year}</span>}
            {car.mileage > 0 && (
              <span>({numberFormatter(car.mileage)} mi)</span>
            )}
          </TitleInfo>
          {additionalInfo.length > 0 && (
            <TitleH4>{additionalInfo.join(" • ")}</TitleH4>
          )}
          {car.price > 0 && (
            <TitleH2>{`$ ${numberFormatter(car.price)}`}</TitleH2>
          )}
          <ImagesContainer style={{ display: "flex", flexDirection: "row" }}>
            {car.images.length > 0 && (
              <ImageCard hoverable key={`car_imag_first`}>
                <Image
                  style={{
                    width: calculateImageWidth(0, car.images.length), //optimise --> usememo
                    height: calculateImageWidth(0, car.images.length),
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={URL.createObjectURL(car.images[0].originFileObj)}
                />
              </ImageCard>
            )}
            {car.images.length > 1 && (
              <ImagesContainer
                style={{ display: "flex", flexDirection: "column" }}>
                {car.images.slice(1, car.images.length).map((image, idx) => {
                  let imageUrl = URL.createObjectURL(image.originFileObj);
                  const imageWidth = calculateImageWidth(
                    idx + 1,
                    car.images.length
                  );

                  return (
                    <ImageCard hoverable key={`car_imag_${idx}`}>
                      <Image
                        style={{
                          width: imageWidth,
                          height: imageWidth,
                        }}
                        src={imageUrl}
                      />
                    </ImageCard>
                  );
                })}
              </ImagesContainer>
            )}
          </ImagesContainer>
          <DescriptionContainer>
            {car.facebook && car.facebook !== "" && (
              <QRCode
                style={{ minWidth: 150, margin: 4 }}
                size={150}
                value={car.facebook || "-"}
                icon="https://cdn-icons-png.flaticon.com/256/124/124010.png"
              />
            )}
            {car.description && (
              <div
                className="text"
                style={{ whiteSpace: "pre-line" }}>{`${car.description}`}</div>
            )}
          </DescriptionContainer>
          <ContactContainer>
            <img style={{ height: 16, width: 16 }} src={phoneImg} />
            <TitleH4>{car.contact?.name}</TitleH4>
            <TitleH4>+1 {car.contact?.phone}</TitleH4>
          </ContactContainer>
        </Page>
      </Document>
      <DownloadButton onClick={() => toPDF()}>Download PDF</DownloadButton>
    </StyledPreviewContainer>
  );
};
