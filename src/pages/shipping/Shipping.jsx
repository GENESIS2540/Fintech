// ClickableBreadcrumb.js

import React, { useState } from 'react';
import { Steps, Button, Typography, Form, Select, Input } from 'antd';
import { currencies, EastAfricaZones, UsaZones } from './data';
import { Option } from 'antd/es/mentions';
import logo from '../landing/assets/brand/logo.svg';
import { Link } from 'react-router-dom';

const { Step } = Steps;
const { Title, Paragraph } = Typography;

const ShippingService = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex gap-3 justify-center items-center">
        <Link to={'/'}>
          <img className="cursor-pointer" src={logo} alt="Logo" />
        </Link>

        <p className="text-center font-bold text-3xl">BNPL Shipping Services</p>
      </div>

      <Steps current={currentStep} onChange={handleStepClick} className="mb-6">
        <Step title="Shipping" />
        <Step title="Payment" />
        <Step title="Confirmation" />
      </Steps>

      {currentStep === 0 && (
        <div>
          <Title level={3}>Shipping Information</Title>
          <Form className="bg-white grid md:grid-cols-2 rounded-xl mb-3 p-4 shadow-custom">
            <div>
              <div className="flex w-full gap-3">
                <div className="grid gap-2">
                  <p>Shipping from:</p>
                  <Select
                    placeholder="Choose location to ship from"
                    style={{
                      width: 200,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        label: <span>East Africa</span>,
                        title: 'East Africa',
                        options: EastAfricaZones,
                      },
                      {
                        label: <span>Places in Usa</span>,
                        title: 'Places in Usa',
                        options: UsaZones,
                      },
                    ]}
                  />
                </div>
                <div className="grid gap-2">
                  <p>Shipping to:</p>
                  <Select
                    placeholder="Choose location to ship to"
                    style={{
                      width: 200,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        label: <span>East Africa</span>,
                        title: 'East Africa',
                        options: EastAfricaZones,
                      },
                      {
                        label: <span>Places in Usa</span>,
                        title: 'Places in Usa',
                        options: UsaZones,
                      },
                    ]}
                  />
                </div>
              </div>
              <p>Item's retail price:</p>
              <div className="flex gap-3">
                <Input placeholder="Price" type="number" min={0} required />
                <Select placeholder="Select a currency">
                  {currencies.map((currency) => (
                    <Option key={currency.value} value={currency.value}>
                      {currency.label}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div>Category</div>
          </Form>
          <Button
            type="primary"
            className="bg-primary text-white"
            onClick={() => handleStepClick(1)}
          >
            Next
          </Button>
        </div>
      )}

      {currentStep === 1 && (
        <div>
          <Title level={3}>Payment Details</Title>
          <Paragraph>
            This is the payment step. Enter your payment details and process
            payment here.
          </Paragraph>
          <Button onClick={() => handleStepClick(0)}>Previous</Button>
          <Button
            type="primary"
            className="bg-primary ml-5 text-white"
            onClick={() => handleStepClick(2)}
          >
            Next
          </Button>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <Title level={3}>Confirmation</Title>
          <Paragraph>
            This is the confirmation step. Review your order and confirm your
            details.
          </Paragraph>
          <Button onClick={() => handleStepClick(1)}>Previous</Button>
          <Button type="primary" className="bg-primary ml-5 text-white">
            Confirm Order
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShippingService;
