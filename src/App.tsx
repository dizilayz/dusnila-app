// import Counter from "./components/Counter";
import AppWrapper from "./components/AppWrapper";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./state/store";
import { fetchTherm } from "./state/counter/thermometerSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const temp = useSelector((state: RootState) => state.thermometer.temperature);
  const co2 = useSelector((state: RootState) => state.thermometer.co2Level);
  const isNormal = useSelector((state: RootState) => state.thermometer.isNormal);

  const fetchData = () => {
    dispatch(fetchTherm());
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <AppWrapper co2={co2} temp={temp} isNormal={isNormal}/>
    </div>
  );
};

export default App;
