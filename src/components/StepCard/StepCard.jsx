import User from '../../assets/icons/user.png';
import Box from '../../assets/icons/package.png';
import Rocket from '../../assets/icons/rocket.png';

const StepCard = ({ id, title, paragraph, image }) => {

    return (
        <>
            <div className="w-full min-h-[380px] relative bg-white border border-[#F1F1F1] rounded-2xl flex items-center justify-center flex-col gap-[14px] p-4 md:p-5 md:gap-7 lg:p-6">
                <div className="w-full flex items-center justify-end absolute top-6 right-6">
                    <div className="w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center">
                        <span className="font-family text-xs font-bold text-white md:text-sm">0{id}</span>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center flex-col gap-4">
                    <div className="w-[100px] h-[100px] bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/20 rounded-full flex items-center justify-center">
                        {image === 'user' && <img src={User} alt={`${image} icon`} />}
                        {image === 'box' && <img src={Box} alt={`${image} icon`} />}
                        {image === 'rocket' && <img src={Rocket} alt={`${image} icon`} />}
                    </div>
                    <h4 className="font-family text-lg font-bold text-[#101727] md:text-xl lg:text-2xl">{title}</h4>
                    <p className="font-family text-sm font-normal text-[#627382] md:text-base text-center">{paragraph}</p>
                </div>
            </div>
        </>
    );
};

export default StepCard;