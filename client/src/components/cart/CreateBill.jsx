import { Button, Card, Form, Input, Modal, Select } from "antd";
import React from "react";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {};

  return (
    <>
      <Modal
        title="Fatura Oluştur"
        open={isModalOpen}
        footer={false}
    
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <Form layout="vertical"     onFinish={onFinish}>
          <Form.Item
            name="customerName"
            label="Müşteri Adı"
            rules={[{ required: true, message: "Bir Müşteri Adı Yazınız" }]}
          >
            <Input placeholder="Bir Müşteri Adını Yazınız" />
          </Form.Item>
          <Form.Item
            name="customerGsm"
            label="Tel No"
            rules={[{ required: true, message: "Tel No Yazınız" }]}
          >
            <Input placeholder="Bir Tel No Yazınız" maxLength={11} />
          </Form.Item>
          <Form.Item
            name="customerBilling"
            label="Ödeme Yöntemi"
            rules={[{ required: true, message: "Bir Ödeme Yöntemi Seçiniz" }]}
          >
            <Select placeholder="Ödeme Yöntemi Seçiniz">
              <Select.Option value="Nakit">Nakit</Select.Option>
              <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
            </Select>
          </Form.Item>
        </Form>

        <Card>
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>549.00₺</span>
          </div>
          <div className="flex justify-between my-2">
            <span>KDV Toplam %8</span>
            <span className="text-red-600">+43.92₺</span>
          </div>
          <div className="flex justify-between">
            <b>Toplam</b>
            <b>592.92₺</b>
          </div>
          <div className="flex justify-end">
            <Button
              className="mt-4"
              type="primary"
              size="large"
              htmlType="submit"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Modal>
    </>
  );
};

export default CreateBill;
