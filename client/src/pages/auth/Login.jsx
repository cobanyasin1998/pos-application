import React from "react";
import { Button, Carousel, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/register/AuthCarousel";
const Login = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full ">
        <div className="xl:px-20 w-full px-10 flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Email Giriniz"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "Email Alanı Boş Bırakılamaz",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Şifre Giriniz"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Şifre Alanı Boş Bırakılamaz",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name={"rememberMe"} valuePropName="checked">
              <div className="flex justify-between">
                <Checkbox>Remember Me</Checkbox>
                <Link> Forgot Password</Link>
              </div>
            </Form.Item>

            <Button type="primary" htmlType="submit" className="w-full large">
              Giriş Yap
            </Button>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Henüz bir hesabınız yokmu ?{" "}
            <Link to={"/register"} className="text-blue-600">
              {" "}
              Şimdi Kaydol
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel className="!h-full px-6" autoplay>
                <AuthCarousel
                  img="/images/responsive.svg"
                  title="Responsive"
                  desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                />
                <AuthCarousel
                  img="/images/statistic.svg"
                  title="İstatistikler"
                  desc="Geniş Tutulan İstatistikler"
                />
                <AuthCarousel
                  img="/images/customer.svg"
                  title="Müşteri Memnuniyeti"
                  desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                />
                <AuthCarousel
                  img="/images/admin.svg"
                  title="Yönetici Paneli"
                  desc="Tek Yerden Yönetim"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
