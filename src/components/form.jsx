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
  StyledLabel,
  StyledForm,
  StyledFormItem,
} from "../asserts/styles/form";

export const MainForm = () => {
  // const [car, setCar] = useState(new Car());
  const [files, setFiles] = useState([]);
  const car = useSelector(selectCarInfo);
  const dispatch = useDispatch();
  const setCarInfo = (updatedCar) => dispatch(setCar(updatedCar));

  // useEffect(() => {
  //   console.log(car);
  // }, [car]);

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
        <StyledFormItem label={<StyledLabel>Title</StyledLabel>} colon={false}>
          <Input
            type="text"
            value={car.title}
            onChange={(event) =>
              setCarInfo({ ...car, title: event.target.value })
            }
          />
        </StyledFormItem>
        <StyledFormItem label={<StyledLabel>Year</StyledLabel>} colon={false}>
          <Slider
            min={2000}
            max={moment().year()}
            marks={{ [car.year]: car.year }}
            onChange={(value) => setCarInfo({ ...car, year: value })}
            value={car.year}
          />
        </StyledFormItem>
        <StyledFormItem
          label={<StyledLabel>Mileage</StyledLabel>}
          colon={false}
        >
          <InputNumber
            addonAfter="mi"
            step={100}
            value={car.mileage}
            onChange={(value) => setCarInfo({ ...car, mileage: value })}
          />
        </StyledFormItem>
        <StyledFormItem label={<StyledLabel>Engine</StyledLabel>} colon={false}>
          <InputNumber
            addonAfter="L"
            step={0.01}
            min={0}
            max={10}
            value={car.engine}
            onChange={(value) => setCarInfo({ ...car, engine: value })}
          />
        </StyledFormItem>
        <StyledFormItem
          label={<StyledLabel>Wheel drive</StyledLabel>}
          colon={false}
        >
          <Radio.Group
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
        </StyledFormItem>
        <StyledFormItem
          label={<StyledLabel>Transmission</StyledLabel>}
          colon={false}
        >
          <Row>
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
        </StyledFormItem>
        <StyledFormItem label={<StyledLabel>Price</StyledLabel>} colon={false}>
          <InputNumber
            addonAfter="$"
            value={car.price}
            onChange={(value) => setCarInfo({ ...car, price: value })}
          />
        </StyledFormItem>
        <StyledFormItem
          label={<StyledLabel>Description</StyledLabel>}
          colon={false}
        >
          <Input.TextArea
            maxLength={600}
            type="text"
            value={car.description}
            onChange={(event) =>
              setCarInfo({ ...car, description: event.target.value })
            }
          />
        </StyledFormItem>
        <StyledFormItem
          label={<StyledLabel>Facebook link</StyledLabel>}
          colon={false}
        >
          <Input
            type="facebook"
            value={car.facebook}
            onChange={(event) =>
              setCarInfo({ ...car, facebook: event.target.value })
            }
          />
        </StyledFormItem>
        <StyledFormItem label={<StyledLabel>Images</StyledLabel>} colon={false}>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload image only</Button>
          </Upload>
        </StyledFormItem>
        <StyledFormItem
          label={<StyledLabel>Contact</StyledLabel>}
          colon={false}
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
        </StyledFormItem>
      </StyledForm>
    </StyledFormContainer>
  );
};
