import HeaderSection from './layouts/HeaderSection/HeaderSection.jsx';
import MainSection from './layouts/MainSection/MainSection.jsx';

const App = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <HeaderSection></HeaderSection>
                <MainSection></MainSection>
            </div>
        </>
    );
};

export default App;