import { Container } from "react-bootstrap";
import DatesList from "./components/DatesList";
import DatesCount from "./components/DatesCount";
import dates from "./data";
import DatesAction from "./components/DatesAction";
import { useState } from "react";
function App() {
  const [Dates, setDates] = useState(dates);
  const onDelete = (_) => {
    setDates([]);
  };
  const onShow = (_) => {
    setDates(dates);
  };
  return (
    <div className="color-body">
      <Container className="py-5">
        <DatesCount dates={Dates} />
        <DatesList dates={Dates} />
        <DatesAction delete={onDelete} show={onShow} />
      </Container>
    </div>
  );
}

export default App;
