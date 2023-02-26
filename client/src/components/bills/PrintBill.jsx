import { Button, Modal } from "antd";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const PrintBill = ({ isModalOpen, setIsModalOpen, customer }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <>
      <Modal
        title="Fatura Yazdır"
        open={isModalOpen}
        footer={false}
        width={800}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <section className="py-20 bg-black" ref={componentRef}>
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo mb-4 mt-2">
                <h2 className="text-4xl font-bold text-slate-700 my">LOGO</h2>
              </div>

              <div className="bill-details mb-3">
                <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Fatura Detayı:</p>
                    <p>{customer?.customerName}</p>
                    <p>{customer?.customerPhoneNumber}</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Fatura:</p>
                    <p>The Boring Company</p>
                    <p> Fake Street</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <div>
                      <p className="font-bold text-slate-700">
                        Fatura Numarası:
                      </p>
                      <p>G-{Math.floor(Math.random() * 10000000000)}</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">
                        Veriliş Tarihi:
                      </p>
                      <p>{customer?.createdAt.substring(0, 10)}</p>
                    </div>
                  </div>
                  <div className="text-md text-slate-500 sm:block hidden">
                    <div>
                      <p className="font-bold text-slate-700">Şartlar:</p>
                      <p>10 Gün</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">Vade:</p>
                      <p>25.03.2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bill-table-area mt-8">
                <table className="min-w-full divide-y divide-slate-500 overflow-hidden ">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Görsel
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Başlık
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Fiyat
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Adet
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                      >
                        Toplam
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {customer?.cartItems.map((item) => (
                      <tr className="border-b  border-slate-200">
                        <td className="py-4">
                          <img
                            src={item.img}
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                        </td>
                        <td className="py-4 ">
                          <span>{item.title}</span>
                        </td>
                        <td className="py-4 text-center">
                          <span>{item.price} TL</span>
                        </td>
                        <td className="py-4 text-center">
                          <span>{item.quantity}</span>
                        </td>
                        <td className="py-4  text-end">
                          <span>{item.quantity * item.price} TL</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        colSpan={4}
                        scope="row"
                        className="text-right pt-6 font-normal"
                      >
                        Ara Toplam
                      </th>

                      <th scope="row" className="text-right pt-6 font-normal">
                        {customer?.subTotal} TL
                      </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={4}
                        scope="row"
                        className="text-right  font-normal"
                      >
                        KDV
                      </th>
                      <th scope="row" className="text-right font-normal">
                        +{customer?.tax} TL
                      </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={4}
                        scope="row"
                        className="text-right  font-normal"
                      >
                        Toplam
                      </th>
                      <th
                        scope="row"
                        className="text-right  font-normal text-red-600"
                      >
                        {customer?.totalAmount} TL
                      </th>
                    </tr>
                  </tfoot>
                </table>
                <div className="py-9">
                  <div className="border-t pt-9 border-slate-700">
                    <p className="text-sm font-light text-slate-700">
                      Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                      Ödenmesi Yasası 0000'e göre, serbest çalışanların bu
                      süreden sonra borçların ödenmemesi durumunda 00.00 gecikme
                      ücreti talep etme hakkına sahip olduklarını ve bu noktada
                      bu ücrete ek olarak yeni bir fatura sunulacağını lütfen
                      unutmayın. Revize faturanın 14 gün içinde ödenmemesi
                      durumunda, vadesi geçmiş hesaba ek faiz ve %8 yasal oran
                      artı %0,5 Bank of England tabanı olmak üzere toplam %8,5
                      uygulanacaktır. Taraflar Kanun hükümleri dışında sözleşme
                      yapamazlar.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="flex justify-end mt-4">
          <Button type="primary" size="large" onClick={handlePrint}>
            Yazdır
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default PrintBill;
