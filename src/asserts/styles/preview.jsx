import styled from "styled-components";
import { COLORS } from "../constants/colors";
import { Button, Card } from "antd";

export const StyledPreviewContainer = styled.div({
  fontFamily: "Garamond",
  width: "50%",
  maxWidth: "1000px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const PreviewContainer = styled.div({
  display: "flex",
  // background: COLORS.WHITE,
  borderRadius: "2px",
  // border: `solid 1px ${COLORS.GREEN}`,
  padding: "24px",
  height: "calc(100% - 70px)",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});

export const PaperContainer = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  background: COLORS.WHITE,
});

export const TitleInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  span {
    font-size: 28px;
    font-weight: 600;
    margin: 12px 4px 0 4px;
  }
`;

export const ImagesContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const DownloadButton = styled(Button)`
  margin: 8px;
`;

export const TitleH4 = styled.h4({
  margin: "4px",
});

export const TitleH2 = styled.h2({
  margin: "8px",
  fontSize: "30px",
});

export const ImageCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }

  .ant-image {
    width: 100%;
  }

  img {
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .text {
    text-align: justify;
  }
`;

export const ContactContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "8px",
});

export const QRCodeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .scan-me {
    display: flex;
    align-items: center;
    font-weight: 600;
    text-transform: uppercase;
    color: ${COLORS.RED};

    img {
      height: 32px;
      width: 32px;
      margin: 0 4px;
    }
  }
`;
