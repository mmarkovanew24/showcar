import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import {
  StyledLabel,
  StyledFormItem,
  FormItemBody,
} from "../asserts/styles/form";
import { COLORS } from "../asserts/constants/colors";

export const CustomFormItem = ({
  title,
  clearTitle,
  clearAction,
  children,
}) => {
  return (
    <StyledFormItem label={<StyledLabel>{title}</StyledLabel>} colon={false}>
      <FormItemBody>
        <div style={{ width: "calc(100% - 38px)" }}>{children}</div>
        <Tooltip title={clearTitle}>
          <Button
            shape="circle"
            type="dashed"
            icon={
              <CloseCircleOutlined
                style={{ fontSize: "22px", color: COLORS.LIGHT_RED }}
              />
            }
            onClick={clearAction}
          />
        </Tooltip>
      </FormItemBody>
    </StyledFormItem>
  );
};
