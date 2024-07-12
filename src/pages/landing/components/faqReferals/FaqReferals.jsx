import React, { useState } from 'react';
import stroke_bars from '../../assets/SVGs/strokes-bars.svg';
import { Form, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const FaqReferals = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-[#F7F7F7] h-max py-[50px] mt-[80px]">
      <div className="grid content-evenly ">
        <img
          className="justify-self-center"
          src={stroke_bars}
          alt="stroke_bars"
        />
        <div className="grid my-[10px] md:grid-cols-2 mx-[auto] w-[90%] md:w-[75%] gap-[20px] md:gap-[60px]">
          <div className="grid content-evenly py-[20px] px-[10px] bg-[#ECF3FB] text-center ">
            <h3 className="text-[45px] font-bold">FAQs</h3>
            <div className="text-[#OB1035] text-[16px] opacity-75 font-bold">
              <p>&gt;How do I transfer money? </p>
              <p>&gt;How do I access my account information and activity?</p>
              <p>&gt;How do I make Payments?</p>
              <p>&gt;What security features are in </p>
            </div>
            <div>
              <p className="text-[#OB1035] opacity-75 text-[18px] font-bold">
                Have More Questions?
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#015FF1] mt-[10px] text-white px-[20px] rounded w-max font-semibold justify-self-center  h-[40px] shadow-btn transition-all duration-300 ease-in-out"
              >
                Contact Us
              </button>
              <Modal
                title={
                  <span
                    style={{
                      fontSize: '24px',
                      color: '#015FF1',
                      fontWeight: 'bold',
                    }}
                  >
                    Contact Us
                  </span>
                }
                centered
                open={modalOpen}
                confirmLoading={confirmLoading}
                onOk={handleOk}
                onCancel={() => setModalOpen(false)}
                okType="primary"
                okText="Send"
                okButtonProps={{
                  style: {
                    backgroundColor: '#015FF1',
                    color: '#FFFFFF',
                  },
                }}
              >
                <Form className="flex flex-col gap-5">
                  <Input required placeholder="Full Name" />
                  <Input required type="email" placeholder="Email Address" />
                  <TextArea required placeholder="Message..." />
                </Form>
              </Modal>
            </div>
          </div>
          <div className="grid content-evenly bg-[#ECF3FB] px-[10px] text-center h-[400px]">
            <h3 className="text-[45px] font-bold">Referals</h3>
            <p className="text-[#OB1035] opacity-75 text-[16px] font-bold">
              Refer Your Friends and Earn More Discount Rewards
            </p>
            <button className="bg-[#015FF1]	 justify-self-center text-white px-[20px] rounded w-max font-semibold  h-[40px] shadow-btn transition-all duration-300 ease-in-out">
              Invite Friends
            </button>
          </div>
        </div>
        <img
          className="justify-self-center"
          src={stroke_bars}
          alt="stroke_bars"
        />
      </div>
    </div>
  );
};

export default FaqReferals;
