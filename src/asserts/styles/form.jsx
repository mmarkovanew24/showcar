import styled from "styled-components";
import FormItem from "antd/es/form/FormItem";
import { COLORS } from "../constants/colors";

export const StyledFormContainer = styled.div({
  overflowY: "auto",
  width: "45%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledTitle = styled.h1({
  color: COLORS.RED,
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: "28px",
});

export const StyledForm = styled.form({
  display: "flex",
  flexDirection: "column",
});

export const StyledLabel = styled.span({
  fontWeight: 500,
  textTransform: "uppercase",
  fontSize: "16px",
});

export const StyledFormItem = styled(FormItem)`
  margin-bottom: 14px;
`;
