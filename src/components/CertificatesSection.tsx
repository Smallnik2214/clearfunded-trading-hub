import { Card, CardContent } from "@/components/ui/card";

export const CertificatesSection = () => {
  const certificates = [{
    name: "Miguel Romero",
    amount: "$2,154.79",
    date: "05/23/25",
    image: "/lovable-uploads/b92059d7-932e-47fe-bf71-7b1ec6956715.png"
  }, {
    name: "Bjorn Svendsen",
    amount: "$675.72",
    date: "06/14/25",
    image: "/lovable-uploads/53a05eb7-635f-4c9a-a6e8-532becdb87d1.png"
  }, {
    name: "Joris de Vries",
    amount: "$371.77",
    date: "06/04/25",
    image: "/lovable-uploads/41804717-d1d9-40fb-9ea7-97d6edce34a2.png"
  }, {
    name: "Marek Kowalski",
    amount: "$3,867.08",
    date: "04/01/25",
    image: "/lovable-uploads/4074fcab-c035-4fd0-be60-ab7a3ca1a9f0.png"
  }, {
    name: "Nathalie Boyarchuk",
    amount: "$740.00",
    date: "03/07/25",
    image: "/lovable-uploads/21d7b446-00d1-403c-af06-863bdfbb7f6d.png"
  }, {
    name: "Roman Musin",
    amount: "$1,043.55",
    date: "03/07/25",
    image: "/lovable-uploads/d6423a69-d2ec-4bf7-9d3e-b26075a23c0e.png"
  }, {
    name: "Pawel Kostush",
    amount: "$3,678.05",
    date: "03/14/25",
    image: "/lovable-uploads/89ec0734-f0c5-485c-b0cf-3162e115b988.png"
  }, {
    name: "Lukas Novak",
    amount: "$4,656.06",
    date: "04/23/25",
    image: "/lovable-uploads/699b2287-03a4-4849-a26a-2eb3cbd763c4.png"
  }, {
    name: "Alvar Nieminen",
    amount: "$1,957.23",
    date: "06/14/25",
    image: "/lovable-uploads/5a4bb11e-a7bc-4aca-a986-52cec53e58e3.png"
  }, {
    name: "Elara Thorne",
    amount: "$978.49",
    date: "05/23/25",
    image: "/lovable-uploads/f583b119-b8e2-4690-956d-7563aebc4e8d.png"
  }];

  return (
    <section className="py-16 px-4 bg-white">
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
            {[...certificates, ...certificates, ...certificates].map((certificate, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-80">
                <CardContent className="p-0">
                  <img 
                    src={certificate.image} 
                    alt={`Payout Certificate for ${certificate.name}`} 
                    className="w-full h-auto rounded-lg" 
                  />
                </CardContent>
              </Card>
            ))}
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
    </section>
  );
};
