import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherApp } from "./WeatherApp";

const queryClient = new QueryClient();

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <WeatherApp />
    </QueryClientProvider>
  )
}

export default App
