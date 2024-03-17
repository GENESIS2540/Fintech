import { Button, Input, Popover } from "antd";
import TextArea from "antd/es/input/TextArea";
import send_data_img from "../../assets/images/send-data.png";

const PopoverComponent = () => {
    const getPopupContainer = () => document.body;
  const content = (
    <div className="grid grid-cols-2">
      <div className="bg-[#1B454B] flex flex-col gap-3 justify-center items-center font-semibold text-white text-[30px] ">
        <p>Contact Us</p>
        <img src={send_data_img} alt="" />
      </div>
      <form className="grid gap-[10px] p-4">
        <div className="grid gap-2 font-semibold">
          <label>Full name</label>
          <Input type="text" placeholder="Enter full name" />
        </div>
        <div className="grid gap-2 font-semibold">
          <label>Email</label>
          <Input type="email" placeholder="Enter email address" />
        </div>
        <div className="grid gap-2 font-semibold">
          <label>Message</label>
          <TextArea size="large" placeholder="Enter message" />
        </div>
        <Button className="bg-[#1B454B] place-self-end text-white w-max">Send</Button>
      </form>
    </div>
  );
  return (
    <div>
      <Popover
        trigger="click"
        getPopupContainer={getPopupContainer}
        placement="center"
        content={content}
      >
        <Button className="outline" type="primary">
          Hover
        </Button>
      </Popover>
    </div>
  );
};

export default PopoverComponent;
