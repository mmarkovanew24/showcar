import { useState } from "react";
import {
  Input,
  InputNumber,
  Slider,
  Switch,
  Col,
  Row,
  Radio,
  Button,
} from "antd";
import moment from "moment";
import { selectCarInfo, setCar } from "../app/reducer";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import { notification, Upload } from "antd";
import { ContactContainer } from "../asserts/styles/preview";
import {
  StyledFormContainer,
  StyledTitle,
  StyledForm,
} from "../asserts/styles/form";
import { CustomFormItem } from "./form-item,";

export const MainForm = () => {
  const [files, setFiles] = useState([]);
  const car = useSelector(selectCarInfo);
  const dispatch = useDispatch();
  const setCarInfo = (updatedCar) => dispatch(setCar(updatedCar));

  const props = {
    beforeUpload: (file) => {
      const isPNG =
        file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg";

      if (!isPNG) {
        notification.error({ message: `${file.name} is not a png/jpeg file` });
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    customRequest: () => {
      setCarInfo({ ...car, images: files });
    },
    onChange: ({ fileList }) => {
      if (fileList.length > 4) {
        notification.error({ message: `You reached max count of images` });
        setFiles(fileList.slice(0, 4));
      } else {
        setFiles(fileList);
      }
    },
    multiple: true,
    maxCount: 4,
    showUploadList: false,
  };

  return (
    <StyledFormContainer>
      <StyledTitle>Set car info</StyledTitle>
      <StyledForm>
        <CustomFormItem
          title="Title"
          clearTitle="Clear a title"
          clearAction={() => setCarInfo({ ...car, title: "" })}
        >
          <Input
            style={{ width: "100%" }}
            type="text"
            value={car.title}
            onChange={(event) =>
              setCarInfo({ ...car, title: event.target.value })
            }
          />
        </CustomFormItem>
        <CustomFormItem
          title="Year"
          clearTitle="Clear a year"
          clearAction={() => setCarInfo({ ...car, year: 0 })}
        >
          <Slider
            style={{ width: "100%" }}
            min={2000}
            max={moment().year()}
            marks={{ [car.year]: car.year }}
            onChange={(value) => setCarInfo({ ...car, year: value })}
            value={car.year}
          />
        </CustomFormItem>
        <CustomFormItem
          title="Mileage"
          clearTitle="Clear a mileage"
          clearAction={() => setCarInfo({ ...car, mileage: 0 })}
        >
          <InputNumber
            style={{ width: "100%" }}
            addonAfter="mi"
            step={100}
            value={car.mileage}
            onChange={(value) => setCarInfo({ ...car, mileage: value })}
          />
        </CustomFormItem>
        <CustomFormItem
          title="Engine"
          clearTitle="Clear an engine"
          clearAction={() => setCarInfo({ ...car, engine: 0 })}
        >
          <InputNumber
            style={{ width: "100%" }}
            addonAfter="L"
            step={0.01}
            min={0}
            max={10}
            value={car.engine}
            onChange={(value) => setCarInfo({ ...car, engine: value })}
          />
        </CustomFormItem>
        <CustomFormItem
          title="Wheel drive"
          clearTitle="Clear a wheel drive"
          clearAction={() => setCarInfo({ ...car, wheelDrive: "" })}
        >
          <Radio.Group
            style={{ width: "100%" }}
            buttonStyle="solid"
            value={car.wheelDrive}
            onChange={(event) =>
              setCarInfo({ ...car, wheelDrive: event.target.value })
            }
          >
            <Radio.Button value="front">Front</Radio.Button>
            <Radio.Button value="rear">Rear</Radio.Button>
            <Radio.Button value="all">All</Radio.Button>
          </Radio.Group>
        </CustomFormItem>
        <CustomFormItem
          title="Transmission"
          clearTitle="Clear a transmission"
          clearAction={() =>
            setCarInfo({ ...car, transmissionAutomatic: null })
          }
        >
          <Row style={{ width: "100%" }}>
            <Col>Manual</Col>
            <Col>
              <Switch
                style={{ marginLeft: "4px", marginRight: "4px" }}
                value={car.transmissionAutomatic}
                onChange={(checked) =>
                  setCarInfo({
                    ...car,
                    transmissionAutomatic: checked,
                  })
                }
              />
            </Col>
            <Col>Automatic</Col>
          </Row>
        </CustomFormItem>
        <CustomFormItem
          title="Price"
          clearTitle="Clear a price"
          clearAction={() => setCarInfo({ ...car, price: 0 })}
        >
          <InputNumber
            style={{ width: "100%" }}
            addonAfter="$"
            value={car.price}
            onChange={(value) => setCarInfo({ ...car, price: value })}
          />
        </CustomFormItem>
        <CustomFormItem
          title="Description"
          clearTitle="Clear a description"
          clearAction={() => setCarInfo({ ...car, description: "" })}
        >
          <Input.TextArea
            style={{ width: "100%" }}
            maxLength={600}
            type="text"
            value={car.description}
            onChange={(event) =>
              setCarInfo({ ...car, description: event.target.value })
            }
          />
        </CustomFormItem>
        <CustomFormItem
          title="Facebook link"
          clearTitle="Clear a facebook link"
          clearAction={() => setCarInfo({ ...car, facebook: "" })}
        >
          <Input
            style={{ width: "100%" }}
            type="facebook"
            value={car.facebook}
            onChange={(event) =>
              setCarInfo({ ...car, facebook: event.target.value })
            }
          />
        </CustomFormItem>
        <CustomFormItem
          title="Images"
          clearTitle="Clear all images"
          clearAction={() => setCarInfo({ ...car, images: [] })}
        >
          <Upload {...props}>
            <Button style={{ width: "100%" }} icon={<UploadOutlined />}>
              Upload image only
            </Button>
          </Upload>
        </CustomFormItem>
        <CustomFormItem
          title="Contact"
          clearTitle="Clear a contact information"
          clearAction={() =>
            setCarInfo({ ...car, contact: { name: "", phone: "" } })
          }
        >
          <ContactContainer>
            <Input
              type="text"
              value={car.contact?.name}
              onChange={(event) =>
                setCarInfo({
                  ...car,
                  contact: {
                    ...car.contact,
                    name: event.target.value,
                  },
                })
              }
            />
            <Input
              type="tel"
              value={car.contact?.phone}
              addonBefore="+1"
              onChange={(event) =>
                setCarInfo({
                  ...car,
                  contact: {
                    ...car.contact,
                    phone: (event.target.value || "").replace(/[^0-9-]/g, ""),
                  },
                })
              }
            />
          </ContactContainer>
        </CustomFormItem>
      </StyledForm>
    </StyledFormContainer>
  );
};
