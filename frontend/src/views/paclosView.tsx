import React, { useEffect, useState } from "react";


const PalcosView: React.FC = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/palcos")
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
            });
    }, []);
    return (
        <div className="flex flex-col items-center justify-between gap-5">
            {items.map((item: any) => (
                <div className="p-10 bg-gray-200 rounded-lg">
                    <header className="flex items-center ml-96 mb-5 sm:justify-center sm:ml-0 bg-gray-600">
                        <h2 className="font-bold font-offside text-2xl">{item.name}</h2>
                    </header>
                    <main className="flex items-center justify-around gap-5">
                        <div className="bg-gray-500 pd-6">
                            <img 
                            src="https://publicacao.saocristovao.se.gov.br/storage/post/terceiro-dia-do-fasc-e-marcado-pela-representatividade-feminina-no-palco-gal-costa-2022-12-04-638c49d4d9e05.jpg"
                            width="700px"
                            ></img>
                        </div>
                        <div className="w-1/2">
                            <h3 className="font-offside">{item.history}</h3>
                        </div>
                    </main>
                </div>
            ))}
        </div>
    );
    };
export default PalcosView;