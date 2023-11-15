import { useEffect } from 'react';

const HomePage = () => {


    useEffect(() => {
      const timeout = setTimeout(() => {
        handleDeepLink();
      },1000)
      return () => {
        clearTimeout(timeout);
      }
    }, [])

    const handleDeepLink = () => {
        const deepLink = 'coftea://mobile#fragmentName?param1=value1&param2=value2';
        window.location.href = deepLink;

    }
    

    return (
        <div>
            <h1>Coftea</h1>
            <hr/>
            <small>redirecting app...</small>
        </div>
    )
}

export default HomePage;