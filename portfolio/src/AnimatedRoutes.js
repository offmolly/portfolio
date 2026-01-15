import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Loading from './components/pages/Loading/Loading';
import { Suspense, lazy, useEffect, useState } from 'react';
import { RefProvider } from './components/pages/RefContext';



const Main = lazy(()=> import('./components/pages/Main/Main'));

const AnimatedRoutes = () =>{
    const [isLoaded,setIsLoaded]=useState(false);
    const [loadtime,setLoadtime] = useState(3000);
    
    useEffect( ()=>{
            setTimeout(() => {
                setIsLoaded(true);
                document.body.classList.remove('no-scroll');
            }, loadtime); 
    },[])

    const location= useLocation();
    return (
        <RefProvider>
            <AnimatePresence mode='wait'>
                {!isLoaded && (
                    <Loading loadtime={loadtime}/>     
                )}
                {isLoaded &&  (
                    <Routes location={location} key={location.pathname}>
                    <Route path='/' element={
                        <Suspense>
                                <Main/>    
                        </Suspense>
                        }/>
                    </Routes>
                )}            
                
            </AnimatePresence>
        </RefProvider>
    )
}

export default AnimatedRoutes