import { Card, CardContent } from "@/components/ui/card";
export const CertificatesSection = () => {
  const certificates = [{
    name: "Joris de Vries",
    amount: "$371.77",
    date: "06/04/25",
    image: "/lovable-uploads/22ee88eb-faa5-4433-99a9-e2bfa0a22a5e.png"
  }, {
    name: "Marek Kowalski",
    amount: "$3867.08",
    date: "04/01/25",
    image: "/lovable-uploads/ed9a07af-1f09-40d9-a8d6-2a8ce4e8aa3c.png"
  }, {
    name: "Elara Thorne",
    amount: "$978.49",
    date: "05/23/25",
    image: "/lovable-uploads/67147775-5982-4239-9359-69fa91802037.png"
  }, {
    name: "Kaelen Stone",
    amount: "$478.23",
    date: "05/06/25",
    image: "/lovable-uploads/e483e425-cfcc-493c-9d27-ad940ccfca7e.png"
  }, {
    name: "Theron Ashworth",
    amount: "$94.61",
    date: "04/10/25",
    image: "/lovable-uploads/800c8a33-8f5b-45e9-afa6-d37f79f19772.png"
  }, {
    name: "Stefan Petrov",
    amount: "$1651.36",
    date: "04/16/25",
    image: "/lovable-uploads/c4fdc31e-448b-4593-b57b-e149ca112422.png"
  }, {
    name: "Silas Eriksson",
    amount: "$532.18",
    date: "04/12/25",
    image: "/lovable-uploads/1ef0c1ac-5b3d-4399-927b-56739db3a033.png"
  }, {
    name: "Lukas Novak",
    amount: "$4656.06",
    date: "04/23/25",
    image: "/lovable-uploads/cd174724-95e8-44e8-a0c7-137ff3c23934.png"
  }, {
    name: "Bjorn Svendsen",
    amount: "$675.72",
    date: "06/14/25",
    image: "/lovable-uploads/82be7d05-fc56-4bed-8344-551804c82ae6.png"
  }, {
    name: "Alvar Nieminen",
    amount: "$1957.23",
    date: "06/14/25",
    image: "/lovable-uploads/cb0329c1-7911-4e0b-834c-aaa973e7a2b8.png"
  }];
  return <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold text-space mb-4">
            Recent Verified Rewards
          </h2>
          <p className="text-xl text-gray-600 font-orbitron">
            Real payouts to our successful traders
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-[scroll-certificates_60s_linear_infinite] gap-6">
            {[...certificates, ...certificates, ...certificates].map((certificate, index) => <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-80">
                <CardContent className="p-0">
                  <img src={certificate.image} alt={`Payout Certificate for ${certificate.name}`} className="w-full h-auto rounded-lg" />
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-certificates {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>;
};