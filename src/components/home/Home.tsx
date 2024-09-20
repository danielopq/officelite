// Main website component. Contains all home website elements.
import HomeMain from './homeMain/HomeMain';
import HomeFooter from './homeFooter/HomeFooter';
const Home:React.FC = () => {
    return (
        <>
            <HomeMain />
            <HomeFooter/>
        </>
    )
}

export default Home;