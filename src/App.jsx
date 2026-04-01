import HeaderSection from './layouts/HeaderSection/HeaderSection.jsx';
import MainSection from './layouts/MainSection/MainSection.jsx';
import FooterSection from './layouts/FooterSection/FooterSection.jsx';

const App = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <HeaderSection></HeaderSection>
                <MainSection></MainSection>
                <FooterSection></FooterSection>
            </div>
        </>
    );
};

export default App;