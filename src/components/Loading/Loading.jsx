const Loading = () => {
    return (
        <>
            <div className="w-full min-h-[485px] flex items-center justify-center">
                <div className="flex space-x-2 justify-center items-center">
                    <div className="w-2 h-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full animate-bounce delay-300"></div>
                </div>
            </div>
        </>
    );
};

export default Loading;