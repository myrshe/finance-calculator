import { Header } from "@/widget/header/ui/Header.tsx"
import { Routes, Route} from "react-router"
import { CalendarPage } from "@/pages/calendar/ui/CalendarPage.tsx"


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/calendar" element={<CalendarPage/>}/>
      </Routes>
      
    </>
  );
}

export default App;
