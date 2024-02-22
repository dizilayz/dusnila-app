'use client'

interface Props {
    isNormal: boolean;
    co2: number | null;
    temp: number | null;
}

const AppWrapper = ({ isNormal, co2, temp }: Props) => {
    return (
        <div className="grid grid-rows-3 grid-flow-col h-screen gap-4 my-10 mx-5">
            {isNormal ? (
                <div className="bg-green-600 col-span-1 p-8 h-full rounded-xl border-2 border-black flex flex-col items-center">
                    <h1 className="text-5xl">Душнила доволен вами</h1>
                    <p className="mt-auto">Все показатели в норме</p>
                </div>
            ) : (
                <div className={`bg-${(co2 && (co2 > 800 || (temp && temp > 27))) ? "red" : "green"}-600 col-span-1 p-8 h-full rounded-xl border-2 border-black flex flex-col items-center  `}>
                    <h1 className="text-5xl">Душнила не доволен вами</h1>
                    <p className="mt-auto">
                        {(co2 && co2 > 800 && temp && temp > 27) ? "Оба показателя превышены" : (co2 && co2 > 800) ? "CO2 превышен" : (temp && temp > 27) ? "Температура превышена" : "Некоторые показатели не в норме"}
                    </p>
                </div>
            )}
            <div className="grid grid-cols-2 gap-2 h-screen col-span-1">
                <div className="bg-black h-2/4 rounded-xl border-2 border-black flex items-center flex-col justify-center">
                    <h1 className="text-white text-5xl">Дней без душноты 0</h1>
                    <button className="bg-white rounded-xl p-5 w-3/4 mt-auto
                    transition duration-300 ease-in-out hover:bg-gray-200 
                    hover:text-black hover:shadow-md hover:scale-105">История</button>
                </div>
                <div className="h-2/4 rounded-xl border-2 border-black"></div>
            </div>
            {isNormal ? (
                <div className="bg-green-600 row-span-3 col-span-2 h-5/6 rounded-xl border-2 border-black flex flex-col items-center">
                    <h1 className="text-9xl">{temp}</h1>
                    <h1 className="font-bold">Температура</h1>
                    <h1 className="text-9xl">{co2}</h1>
                    <h1 className="font-bold">CO2</h1>
                </div>
            ) : (
                <div className="bg-red-600 row-span-3 col-span-2 h-5/6 rounded-xl border-2 border-black flex flex-col items-center">
                    <h1 className="text-9xl">{temp}</h1>
                    <h1 className="font-bold">Температура</h1>
                    <h1 className="text-9xl">{co2}</h1>
                    <h1 className="font-bold">CO2</h1>
                </div>
            )}
        </div>
    );
};
export default AppWrapper;





