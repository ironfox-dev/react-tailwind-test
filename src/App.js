import logo from './logo.svg';
import { AlarmClock } from './components';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AlarmClock label="Alarm clock" defaultValue="07:30" />
    </div>
  );
}

export default App;
