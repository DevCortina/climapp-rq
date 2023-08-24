import { useRef ,useState } from "react";
import {Weather} from "./Weather";
import DateTime from "./DateTime";
import { FaChevronRight } from "react-icons/fa6";
import { useWeather } from "../hooks/useWeather";
import { BsCloudsFill } from "react-icons/bs";

function Layout() {

    const input = useRef(null);
    const [location, setLocation] = useState(null);
    const query = useWeather(location);
    const search = (e) => {
        e.preventDefault();
            setLocation(input.current.value);
            input.current.value = '';
    
      }

  return (
    <div className="wrapper">
      <header className="p-4 flex justify-between items-center flex-row w-full">
        <a href="/"> <h1 className="text-4xl font-bold jost text-white">Climapp</h1></a>  
        {!query.isSuccess 
                ? ( <BsCloudsFill  size={36} style={{ fill: 'white' }} />)
                : ( <>
                <a href="/" className="text-white  p-4 "> <FaChevronRight />
                </a></>)
                }
          
      </header>
      <main>
        <section className="w-full h-full flex flex-col justify-center items-center">
        {!query.isSuccess && !query.isFetching &&
        <div 
          className="flex flex-col w-full justify-center items-center">
        
        <form onSubmit={search}>
          
            <input 
               className="p-2 rounded-sm capitalize focus:outline-none"
               placeholder="Nombre Ciudad + Enter"
               type="text" ref={input}
               autoFocus />
        </form> <br />
        </div>
        }
        <div>
            {query.isError && <p className="text-white">No se encontro la ciudad, intente nuevamente.</p>}
        </div>
        {query.isSuccess && <Weather weather={query.data} /> }
        </section>
      </main>
      <footer className=" w-full flex items-center justify-center">
        <p className="lato text-sm font-bold text-white text-center">By CortinaDev</p>
      </footer>
    </div>
  );
}

export default Layout;
