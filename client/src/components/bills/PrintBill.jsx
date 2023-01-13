import { Button, Modal } from "antd";
import React from "react";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
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
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo mb-4 mt-2">
                <h2 className="text-4xl font-bold text-slate-700 my">LOGO</h2>
              </div>

              <div className="bill-details mb-3">
                <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Fatura Detayı:</p>
                    <p>Fake Street</p>
                    <p> 123 San JAVİER</p>
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
                      <p>05000</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">
                        Veriliş Tarihi:
                      </p>
                      <p>01.01.2023</p>
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
                    <tr className="border-b  border-slate-200">
                      <td className="py-4">
                        <img
                          src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                          alt=""
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4 ">
                        <span>Elma</span>
                      </td>
                      <td className="py-4 text-center">
                        <span>5TL</span>
                      </td>
                      <td className="py-4 text-center">
                        <span>1</span>
                      </td>
                      <td className="py-4  text-end">
                        <span>5TL</span>
                      </td>
                    </tr>
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
                        61 TL
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
                        +4.88 TL
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
                        65.88 TL
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
          <Button type="primary" size="large">
            Yazdır
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default PrintBill;
